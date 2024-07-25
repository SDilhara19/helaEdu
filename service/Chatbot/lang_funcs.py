# Importing the necessary packages
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_community.vectorstores import FAISS
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts.chat import ChatPromptTemplate
from langchain_core.prompts import MessagesPlaceholder
from langchain.chains import create_history_aware_retriever
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_google_datastore import DatastoreChatMessageHistory
from langchain_core.messages import HumanMessage, AIMessage
from google.cloud import datastore
from google.oauth2 import service_account
from langchain_core.messages import (
    HumanMessage as ImportedHumanMessage,
    AIMessage as ImportedAIMessage,
)
import json


project_id = "helaedu-website"

source = open("./config/credentials.json")
info = json.load(source)
source.close()
db_credentials = service_account.Credentials.from_service_account_info(info)
db_client = datastore.Client(project=project_id, credentials=db_credentials)


# This will load the PDF file
def load_pdf_data(file_path):
    # Creating a PyMuPDFLoader object with file_path
    loader = PyMuPDFLoader(file_path=file_path)

    # loading the PDF file
    docs = loader.load()

    # returning the loaded document
    return docs


# Responsible for splitting the documents into several chunks
def split_docs(documents, chunk_size=1000, chunk_overlap=200):

    # Initializing the RecursiveCharacterTextSplitter with
    # chunk_size and chunk_overlap
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size, chunk_overlap=chunk_overlap
    )

    # Splitting the documents into chunks
    chunks = text_splitter.split_documents(documents=documents)

    # returning the document chunks
    return chunks


# function for loading the embedding model
def load_embedding_model(model_path, normalize_embedding=True):
    return HuggingFaceEmbeddings(
        model_name=model_path,
        model_kwargs={"device": "cpu"},  # here we will run the model with CPU only
        encode_kwargs={
            "normalize_embeddings": normalize_embedding  # keep True to compute cosine similarity
        },
    )


# Function for creating embeddings using FAISS
def create_embeddings(chunks, embedding_model, storing_path="Chatbot/vectorstore"):
    # Creating the embeddings using FAISS
    vectorstore = FAISS.from_documents(chunks, embedding_model)

    # Saving the model in current directory
    vectorstore.save_local(storing_path)

    # returning the vectorstore
    return vectorstore


def load_vectorstore(embedding_model, storing_path="Chatbot/vectorstore"):

    embeddings = load_embedding_model(embedding_model)
    # Loading the saved vector store
    vectorstore = FAISS.load_local(
        storing_path, embeddings, allow_dangerous_deserialization=True
    )

    # Returning the retriever
    return vectorstore.as_retriever()


def add_history(llm, retriever):
    contextualize_q_system_prompt = (
        "Given a chat history and the latest user question "
        "which might reference context in the chat history, "
        "formulate a standalone question which can be understood "
        "without the chat history. Do NOT answer the question, "
        "just reformulate it if needed and otherwise return it as is."
    )
    contextualize_q_prompt = ChatPromptTemplate.from_messages(
        [
            ("system", contextualize_q_system_prompt),
            MessagesPlaceholder("chat_history"),
            ("human", "{input}"),
        ]
    )
    return create_history_aware_retriever(llm, retriever, contextualize_q_prompt)


def create_chain(history_aware_retriever, llm, qa_prompt):
    # Creating the chain for Question Answering
    question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)
    rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)
    return rag_chain


def create_conversational_chain(rag_chain, session_id):

    return RunnableWithMessageHistory(
        rag_chain,
        lambda session_id: DatastoreChatMessageHistory(session_id, client=db_client),
        input_messages_key="input",
        history_messages_key="chat_history",
        output_messages_key="answer",
    )

def retrieve_history(session_id):
    chat_history = DatastoreChatMessageHistory(session_id, client=db_client)
    return serialize_chat_history(chat_history.messages)

class HumanMessage:
    def __init__(self, content):
        self.content = content

    def to_dict(self):
        return {"type": "human", "content": self.content}


class AIMessage:
    def __init__(self, content):
        self.content = content

    def to_dict(self):
        return {"type": "ai", "content": self.content}

def serialize_chat_history(chat_history):
    serialized_chat_history = []
    for message in chat_history:
        if isinstance(message, ImportedHumanMessage):
            serialized_chat_history.append(HumanMessage(message.content).to_dict())
        elif isinstance(message, ImportedAIMessage):
            serialized_chat_history.append(AIMessage(message.content).to_dict())
    return serialized_chat_history

def get_references(context):
    references = []
    for document in context:
        reference = {
            "source": document.metadata["source"],
            "page": document.metadata["page"],
            "citation": document.page_content,
        }
        references.append(reference)
    return references


def get_response(query, chain, user_session_id):
    # Getting response from chain
    response = chain.invoke(
        {"input": query},
        config={"configurable": {"session_id": user_session_id}},
    )

    return response

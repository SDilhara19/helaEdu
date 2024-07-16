# Importing the necessary packages
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.chains import RetrievalQA
import textwrap
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_community.vectorstores import FAISS


    
    
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
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap
    )
    
    # Splitting the documents into chunks
    chunks = text_splitter.split_documents(documents=documents)
    
    # returning the document chunks
    return chunks


# function for loading the embedding model
def load_embedding_model(model_path, normalize_embedding=True):
    return HuggingFaceEmbeddings(
        model_name=model_path,
        model_kwargs={'device':'cpu'}, # here we will run the model with CPU only
        encode_kwargs = {
            'normalize_embeddings': normalize_embedding # keep True to compute cosine similarity
        }
    )


# Function for creating embeddings using FAISS
def create_embeddings(chunks, embedding_model, storing_path="vectorstore"):
    # Creating the embeddings using FAISS
    vectorstore = FAISS.from_documents(chunks, embedding_model)
    
    # Saving the model in current directory
    vectorstore.save_local(storing_path)
    
    # returning the vectorstore
    return vectorstore

# Creating the chain for Question Answering
def load_qa_chain(retriever, llm, prompt):
    return RetrievalQA.from_chain_type(
        llm=llm,
        retriever=retriever, # here we are using the vectorstore as a retriever
        chain_type="stuff",
        return_source_documents=True, # including source documents in output
        chain_type_kwargs={'prompt': prompt} # customizing the prompt
    )
    


def get_response(query, chain):
    # Getting response from chain
    response = chain.invoke({
        'query': query
        })
    
    # Wrapping the text for better output 
    wrapped_text = textwrap.fill(response['result'], width=100)
    print("Assistant: ", wrapped_text)



    # def get_response(query, chain):
    # # Getting response from chain
    # response = chain.invoke({'query': query})
    
    # # Wrapping the text for better output 
    # wrapped_text = textwrap.fill(response['result'], width=100)
    # print("Assistant: ", wrapped_text)
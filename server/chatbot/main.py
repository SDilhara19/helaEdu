from lang_funcs import *
from langchain_community.llms import Ollama
from langchain_core.prompts.chat import ChatPromptTemplate
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.prompts import MessagesPlaceholder
from langchain.prompts import PromptTemplate
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import create_history_aware_retriever
from langchain_community.chat_message_histories import ChatMessageHistory
from langchain_core.chat_history import BaseChatMessageHistory
from langchain_core.runnables.history import RunnableWithMessageHistory

store = {}

llm = Ollama(model="orca-mini", temperature=0)

# Loading the Embedding Model
embed = load_embedding_model(model_path="all-MiniLM-L6-v2")

docs = load_pdf_data(file_path="/Users/helaEdu/server/textbooks/grade10/science.pdf")
# docs = load_pdf_data(file_path="/Users/helaEdu/server/textbooks/grade10/science2.pdf")
documents = split_docs(documents=docs)

# creating vectorstore
vectorstore = create_embeddings(documents, embed)

# converting vectorstore to a retriever
retriever = vectorstore.as_retriever()


# template = """
# ### System:
# You are an respectful and honest assistant. You have to answer the user's questions using only the context \
# provided to you. If you don't know the answer, just say you don't know. Don't try to make up an answer.

# ### Context:
# {context}

# ### User:
# {question}

# ### Response:
# """

# Creating the prompt from the template which we created before
# system_prompt = PromptTemplate.from_template(template)

# # prompt = ChatPromptTemplate.from_messages([
# #    ("system", "You are an respectful and honest assistant. You have to answer the user's questions using only the context provided to you. If you don't know the answer, just say you don't know. Don't try to make up an answer."),
# #     MessagesPlaceholder(variable_name="chat_history")
# #    ("human", "{input}")
# # ])

# # prompt = ChatPromptTemplate.from_messages(
# #     [
# #         ("system", "You are an respectful and honest assistant. You have to answer the user's questions based on the context: {context}")
# #         ("human", "{question}")
# #     ]
# # )

# # Creating the chain
# chain = load_qa_chain(retriever, llm, prompt)

# # chain = load_qa_chain(retriever, llm, prompt)
# # chat_history = [
# #     HumanMessage('Hello'),
# #     AIMessage('Hello, how can I assist you?'),
# #     HumanMessage('My name is Sam')
# # ]
# while True:

#     user_input = input("You: ")
#     if user_input.lower() == 'exit':
#         break

#     get_response(user_input, chain)

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
history_aware_retriever = create_history_aware_retriever(
    llm, retriever, contextualize_q_prompt
)

system_prompt = (
    "You are an assistant for question-answering tasks. "
    "Use the following pieces of retrieved context to answer "
    "the question. If you don't know the answer, say that you "
    "don't know."
    "\n\n"
    "{context}"
)

qa_prompt = ChatPromptTemplate.from_messages(
    [
        ("system", system_prompt),
        MessagesPlaceholder("chat_history"),
        ("human", "{input}"),
    ]
)

prompt = ChatPromptTemplate.from_messages(
    [
        ("system", system_prompt),
        ("human", "{input}"),
    ]
)
# question_answer_chain = create_stuff_documents_chain(llm, prompt)
# rag_chain = create_retrieval_chain(retriever, question_answer_chain)

question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)

rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)

chat_history = []

question = "What is the mass number of sodium?"
ai_msg_1 = rag_chain.invoke({"input": question, "chat_history": chat_history})
chat_history.extend(
    [
        HumanMessage(content=question),
        AIMessage(content=ai_msg_1["answer"]),
    ]
)

second_question = "What is its atomic number?"
ai_msg_2 = rag_chain.invoke({"input": second_question, "chat_history": chat_history})

print(ai_msg_2["answer"])




# while True:

#     user_input = input("You: ")
#     if user_input.lower() == 'exit':
#         break

#     response = rag_chain.invoke({"input": user_input})
#     print(response["answer"])

#     for document in response["context"]:
#         print(document)
#         print()


    # get_response(user_input, rag_chain)
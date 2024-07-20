from Chatbot.lang_funcs import *
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
from langchain_google_datastore import DatastoreChatMessageHistory
from langchain_openai import ChatOpenAI
import os

 
# from google.colab import auth.


# os.environ["OPENAI_API_KEY"] ="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"

llm = Ollama(model="orca-mini", temperature=0)
# llm = ChatOpenAI(model="gpt-3.5-turbo-0125")

# Loading the Embedding Model
embed = load_embedding_model(model_path="all-MiniLM-L6-v2")

#retrieving the vectorstore
retriever =  load_vectorstore(embed, allow_dangerous_deserialization=True)

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
    "You are an assistant for question-answering tasks for school students."
    "Use the retrieved context to answer "
    "the question. If you don't know the answer, say that you "
    "don't know."
    "Give your answer clearly and concisely."
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

question_answer_chain = create_stuff_documents_chain(llm, qa_prompt)

rag_chain = create_retrieval_chain(history_aware_retriever, question_answer_chain)

store = {}

# def get_session_history(session_id: str) -> BaseChatMessageHistory:
#     if DatastoreChatMessageHistory(session_id="user-session-id"):
#         return store[session_id] = ChatMessageHistory()
#     return store[session_id]

def get_session_history(session_id: str) -> BaseChatMessageHistory:
    if session_id not in store:
        store[session_id] = ChatMessageHistory()
    return store[session_id]

conversational_rag_chain = RunnableWithMessageHistory(
    rag_chain,
    get_session_history,
    input_messages_key="input",
    history_messages_key="chat_history",
    output_messages_key="answer",
)

chat_history = []


def main():
    
    

    while True:

        user_input = input("You: ")
        if user_input.lower() == 'exit':
            break

        response = conversational_rag_chain.invoke(
        {"input": user_input},
        config={
            "configurable": {"session_id": "abc123"}
        },  # constructs a key "abc123" in `store`.
    )
        print(response["answer"])
        # chat_history.add_user_message(user_input)
        # chat_history.add_ai_message(response["answer"])

        for document in response["context"]:
            print("source: ",document.metadata['source'])
            print("page_number: ", document.metadata['page'])

        print("\n\nChat History:")
        # print(chat_history.messages)
        for message in store["abc123"].messages:
            if isinstance(message, AIMessage):
                prefix = "AI"
            else:
                prefix = "User"

            print(f"{prefix}: {message.content}\n")


    # get_response(user_input, rag_chain)

# def get_response2(prompt):
#     response = conversational_rag_chain.invoke(
#         {"input": prompt},
#         config={
#             "configurable": {"session_id": "abc123"}
#         },  # constructs a key "abc123" in `store`.
#     )

#     return response["answer"]

def get_response2(prompt):
    sd = "abc123"
    return sd

if __name__ == "__main__":
    main()
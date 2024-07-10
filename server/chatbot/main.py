from lang_funcs import *
from langchain_community.llms import Ollama
from langchain_core.prompts.chat import ChatPromptTemplate
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.prompts import MessagesPlaceholder
from langchain.prompts import PromptTemplate


llm = Ollama(model="orca-mini", temperature=0)

# Loading the Embedding Model
embed = load_embedding_model(model_path="all-MiniLM-L6-v2")

docs = load_pdf_data(file_path="/Users/helaEdu/server/textbooks/grade10/science.pdf")
documents = split_docs(documents=docs)

# creating vectorstore
vectorstore = create_embeddings(documents, embed)

# converting vectorstore to a retriever
retriever = vectorstore.as_retriever()


template = """
### System:
You are an respectful and honest assistant. You have to answer the user's questions using only the context \
provided to you. If you don't know the answer, just say you don't know. Don't try to make up an answer.

### Context:
{context}

### User:
{question}

### Response:
"""

# Creating the prompt from the template which we created before
prompt = PromptTemplate.from_template(template)

# prompt = ChatPromptTemplate.from_messages([
#    ("system", "You are an respectful and honest assistant. You have to answer the user's questions using only the context provided to you. If you don't know the answer, just say you don't know. Don't try to make up an answer."),
#     MessagesPlaceholder(variable_name="chat_history")
#    ("human", "{input}")
# ])

# prompt = ChatPromptTemplate.from_messages(
#     [
#         ("system", "You are an respectful and honest assistant. You have to answer the user's questions based on the context: {context}")
#         ("human", "{question}")
#     ]
# )

# Creating the chain
chain = load_qa_chain(retriever, llm, prompt)

# chain = load_qa_chain(retriever, llm, prompt)
# chat_history = [
#     HumanMessage('Hello'),
#     AIMessage('Hello, how can I assist you?'),
#     HumanMessage('My name is Sam')
# ]
while True:

    user_input = input("You: ")
    if user_input.lower() == 'exit':
        break

    get_response(user_input, chain)
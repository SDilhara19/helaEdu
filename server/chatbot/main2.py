from lang_funcs import *
from langchain_community.llms import Ollama
from langchain_core.prompts.chat import ChatPromptTemplate
from langchain_core.messages import HumanMessage, AIMessage
from langchain_core.prompts import MessagesPlaceholder
from langchain.prompts import PromptTemplate
from langchain.memory import ConversationBufferMemory
from langchain.chains.llm import LLMChain
from langchain_core.runnables.base import RunnableSequence
import os
from dotenv import load_dotenv
from langchain_community.chat_message_histories import (
    UpstashRedisChatMessageHistory,
)

load_dotenv()


UPSTASH_URL = os.getenv('UPSTASH_URL')
UPSTASH_TOKEN = os.getenv('UPSTASH_TOKEN')

history = UpstashRedisChatMessageHistory(
    url= UPSTASH_URL, 
    token=UPSTASH_TOKEN, 
    ttl=0, session_id="chat2"
)


model = Ollama(model="orca-mini", temperature=1)


prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an respectful and honest assistant. You have to answer the user's questions. If you don't know the answer, just say you don't know. Don't try to make up an answer."),
    MessagesPlaceholder(variable_name="chat2"),
    ("human", "{input}")
])

memory = ConversationBufferMemory(
    memory_key="chat2",
    return_messages=True,
    chat_memory=history
)

chain = LLMChain(
    llm = model,
    prompt=prompt,
    memory=memory,
    verbose=True
)

# chain = RunnableSequence(prompt, model)

# msg1 = {
#     "input": "What is the atomic number of Sodium?"
# }

# res1 = chain.invoke(msg1)
# print(res1)

msg2 = {
    "input": "What is the mass number of it?"
}

res2 = chain.invoke(msg2)
print(res2)
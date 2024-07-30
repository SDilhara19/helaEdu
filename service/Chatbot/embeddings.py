# from lang_funcs import *
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.document_loaders import PyMuPDFLoader
from langchain_community.vectorstores import FAISS
from PyPDF2 import PdfReader, PdfWriter
import os

def load_embedding_model(model_path, normalize_embedding=True):
    return HuggingFaceEmbeddings(
        model_name=model_path,
        model_kwargs={"device": "cpu"},  # here we will run the model with CPU only
        encode_kwargs={
            "normalize_embeddings": normalize_embedding  # keep True to compute cosine similarity
        },
    )

def load_pdf_data(file_path):
    # Creating a PyMuPDFLoader object with file_path
    loader = PyMuPDFLoader(file_path=file_path)

    # loading the PDF file
    docs = loader.load()

    # returning the loaded document
    return docs

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

def create_embeddings(chunks, embedding_model, storing_path="service/Chatbot/vectorstore/10"):
    # Creating the embeddings using FAISS
    if os.path.exists(storing_path):
        embeddings = load_embedding_model(model_path="all-MiniLM-L6-v2")
        # Load the existing vectorstore
        vectorstore = FAISS.load_local(storing_path, embeddings, allow_dangerous_deserialization=True)
        # Add new embeddings to the existing vectorstore
        # vectorstore.add_documents(chunks)
        if   vectorstore.add_documents(chunks):
            # Save the updated vectorstore
            
            print("Updated vectorstore")

    else:
        # Create a new vectorstore
        vectorstore = FAISS.from_documents(chunks, embedding_model)

    # Save the updated vectorstore
    vectorstore.save_local(storing_path)

    return True


# Function for creating embeddings using FAISS
def main():

    embed = load_embedding_model(model_path="all-MiniLM-L6-v2")

    docs = load_pdf_data(
        file_path="/Users/helaEdu/textbooks/10/Maths_II.pdf"
    )

    documents = split_docs(documents=docs)

    vectorstore = create_embeddings(documents, embed)

    return True


if __name__ == "__main__":
    main()


def remove_pages(input_pdf, output_pdf, pages_to_remove):

    reader = PdfReader(input_pdf)
    writer = PdfWriter()

    # Add pages to the writer except the ones to remove
    for i in range(len(reader.pages)):
        if i not in pages_to_remove:
            writer.add_page(reader.pages[i])

    # Write the output PDF
    with open(output_pdf, "wb") as out_pdf:
        writer.write(out_pdf)

    return True

# remove_pages("/Users/helaEdu/textbooks/grade10/HealthScience.pdf","/Users/helaEdu/textbooks/10/HealthScience.pdf", [])


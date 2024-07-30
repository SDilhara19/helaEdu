from lang_funcs import *
from PyPDF2 import PdfReader, PdfWriter

# Function for creating embeddings using FAISS
def main():

    embed = load_embedding_model(model_path="all-MiniLM-L6-v2")

    docs = load_pdf_data(
        file_path="/Users/helaEdu/textbooks/10/ICT.pdf"
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


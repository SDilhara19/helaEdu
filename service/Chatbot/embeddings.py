from lang_funcs import *
from PyPDF2 import PdfReader, PdfWriter


def main():

    embed = load_embedding_model(model_path="all-MiniLM-L6-v2")

    docs = load_pdf_data(
        file_path="/Users/helaEdu/server/textbooks/grade10/Maths_I.pdf"
    )

    documents = split_docs(documents=docs)

    vectorstore = create_embeddings(documents, embed)

    return True


if __name__ == "__main__":
    main()


def remove_pages(output_pdf, pages_to_remove):
    input_pdf = "/Users/helaEdu/server/textbooks/grade10/Maths_I.pdf"
    input_pdf = "/Users/helaEdu/server/textbooks/grade10/Maths_I00.pdf"

    reader = PdfReader(input_pdf)
    writer = PdfWriter()

    # Add pages to the writer except the ones to remove
    for i in range(len(reader.pages)):
        if i not in pages_to_remove:
            writer.add_page(reader.pages[i])

    # Write the output PDF
    with open(output_pdf, "wb") as out_pdf:
        writer.write(out_pdf)


# Example usage
input_pdf = "input.pdf"
output_pdf = "output.pdf"
pages_to_remove = [0, 2]  # List of pages to remove (0-indexed)

remove_pages(input_pdf, output_pdf, pages_to_remove)

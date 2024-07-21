from Chatbot.chatbot_student import chat_response


def student_chat_response(query, grade, subject, student_id, chat_session_id):
    response = chat_response(query, grade, subject, student_id, chat_session_id)
    return response

def main():
    output = student_chat_response("what are the problems of them?", "10", "Maths", "2323", "chat1")
    print(output)


if __name__ == "__main__":
    main()
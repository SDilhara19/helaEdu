import React from 'react'
import { Footer, Header } from '@components/common'
import NoteCard from '@components/notes/NoteCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const AllNotes = () => {
    const notes = [{ "topic": "Quadratic Equations", "date": "2024-01-15", "subject": "Maths", "content": "Today we focused on solving quadratic equations. We used the quadratic formula, which is given by x = [-b ± sqrt(b^2 - 4ac)] / (2a). We practiced identifying the coefficients a, b, and c from the standard form of a quadratic equation ax^2 + bx + c = 0. By substituting these coefficients into the formula, we found the roots of the equations. Additionally, we revisited factorization as another method for solving quadratic equations. We factored trinomials into the product of two binomials and verified our solutions by expanding them back to the original quadratic equation. This practice helped solidify our understanding of the relationships between the coefficients and the solutions of the equations." }, { "topic": "Chemical Reactions", "date": "2024-01-18", "subject": "Science", "content": "Learned about different types of chemical reactions including synthesis, decomposition, and combustion." }, { "topic": "Continental Drift Theory", "date": "2024-01-20", "subject": "Geography", "content": "Studied the theory of continental drift proposed by Alfred Wegener and the evidence supporting it." }, { "topic": "Fundamental Rights", "date": "2024-01-22", "subject": "Civics", "content": "Discussed the fundamental rights provided by the constitution and their importance in a democracy." }, { "topic": "Noble Eightfold Path", "date": "2024-01-25", "subject": "Buddhism", "content": "Explored the Noble Eightfold Path and its significance in leading a righteous life." }, { "topic": "Basic Dance Movements", "date": "2024-01-27", "subject": "Dancing", "content": "Practiced basic dance movements and rhythms in contemporary dance styles." }, { "topic": "Introduction to HTML", "date": "2024-01-29", "subject": "ICT", "content": "Learned the basics of HTML and created a simple webpage using HTML tags." }, { "topic": "Double-Entry System", "date": "2024-02-01", "subject": "Accounts", "content": "Studied the double-entry system of accounting and recorded transactions in the ledger." }, { "topic": "Entrepreneurial Skills", "date": "2024-02-03", "subject": "Entrepreneurship", "content": "Discussed the essential skills required for an entrepreneur, including creativity and risk-taking." }, { "topic": "Human Digestive System", "date": "2024-02-05", "subject": "Health Science", "content": "Learned about the organs involved in the human digestive system and their functions." }, { "topic": "Probability", "date": "2024-02-08", "subject": "Maths", "content": "Explored basic concepts of probability and solved problems involving probability calculations." }, { "topic": "Photosynthesis", "date": "2024-02-10", "subject": "Science", "content": "Studied the process of photosynthesis and its importance in the life cycle of plants." }, { "topic": "Types of Maps", "date": "2024-02-12", "subject": "Geography", "content": "Learned about different types of maps, including physical, political, and thematic maps." }, { "topic": "Government Structure", "date": "2024-02-15", "subject": "Civics", "content": "Discussed the structure of government, including the roles of the executive, legislative, and judiciary." }, { "topic": "Four Noble Truths", "date": "2024-02-18", "subject": "Buddhism", "content": "Explored the Four Noble Truths and their importance in understanding the nature of suffering." }, { "topic": "Bharatanatyam Basics", "date": "2024-02-20", "subject": "Dancing", "content": "Practiced basic steps and postures in Bharatanatyam, a classical Indian dance form." }, { "topic": "Basic CSS", "date": "2024-02-22", "subject": "ICT", "content": "Learned the basics of CSS and applied styles to a webpage created with HTML." }, { "topic": "Trial Balance", "date": "2024-02-25", "subject": "Accounts", "content": "Studied how to prepare a trial balance to check the accuracy of ledger accounts." }, { "topic": "Business Plan", "date": "2024-02-27", "subject": "Entrepreneurship", "content": "Discussed the components of a business plan and started drafting a business plan for a new venture." }, { "topic": "Personal Hygiene", "date": "2024-03-01", "subject": "Health Science", "content": "Learned about the importance of personal hygiene and practices to maintain good health." }]

    const navigator = useNavigate()

    const handleIconClick = () => {
        navigator(`./new`)
      }

    return (
        <div className="w-full ">
            <Header />
            <div className='px-64 mt-12 h-full w-full'>
                <div className='flex justify-between items-center'>
                    <div className='p-10 h-1/5'>
                        <div className='s-topic'>Stickies</div>
                        <div className='n-text'>Stay updated with your own knowledge </div>
                    </div>
                    <button className="py-3 px-10 border-blue bg-blue rounded-2xl n-text text-white flex justify-center items-center gap-8" onClick={() => handleIconClick()}>
                        <p>New Note </p>    <FontAwesomeIcon icon={faPlus} size="1x" />
                    </button>
                </div>

                <div className='p-10 h-4/5 w-full grid grid-cols-3'>
                    {notes.map((note, index) => (
                        <NoteCard key={index} topic={note.topic} date={note.date} subject={note.subject} content={note.content} />
                    ))}


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AllNotes
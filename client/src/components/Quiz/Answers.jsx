import React from 'react'
import Answer from './Answer';

const Answers = () => {

  const answers = [
    { id: 1, text: "The distance of Earth from the Sun changes" },
    { id: 2, text: " The tilt of Earth's rotational axi" },
    { id: 3, text: "The changing brightness of the Sun" },
    { id: 4, text: "The elliptical shape of Earth's orbit" }
  ];

  return (
    <div className='w-full grid grid-flow-row grid-cols-2 mx-32'>
      {answers.map((type, index) =>(
        <Answer key={index} type={type.text} id={type.id} onClick={() => answers(type.id)}/>

      ))
  }     </div>

  )
}

export default Answers

 
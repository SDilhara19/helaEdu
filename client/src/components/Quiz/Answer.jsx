// import React from 'react'

// const Answer = () =>({ type, selectAnswer }) => {
//     return (
//       <div className="card h-18 m-7 shadow-lg p-4 cursor-pointer" onClick={selectAnswer}>
//         {type}
//       </div>
//     );
//   };

// export default Answer

import React from 'react'

const Answer = ({id, option, onclick, selectedOption}) => {
    return (
      <div className='flex items-center'>
        <div className='special-text text-blue'> {`${id}).`}</div>
          <button className="card min-h-18 max-w-4xl m-7 border-2 border-blue rounded-full p-4 cursor-pointer text-1 min-w-128" onClick={onclick} style={{ 
        backgroundColor: 
        selectedOption === option ? 
            '#0A6CF5' : 'white', 
            color: 
        selectedOption === option ? 
            'white' : '#0A6CF5',  }}>
        {option}
      </button>
    
      </div>
    
    );
  };

export default Answer
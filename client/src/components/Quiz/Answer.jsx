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
      <button className="card min-h-18 max-w-4xl m-7 border-2 border-blue rounded-full p-4 cursor-pointer text-1" onClick={onclick} style={{ 
        backgroundColor: 
        selectedOption === option ? 
            '#0A6CF5' : 'white', 
            color: 
        selectedOption === option ? 
            'white' : '#0A6CF5',  }}>
        {id}. {option}
      </button>
    );
  };

export default Answer
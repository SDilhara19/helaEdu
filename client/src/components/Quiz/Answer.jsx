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

const Answer = ({id, type}) => {
    return (
      <div className="card min-h-18 max-w-4xl m-7 border-2 border-blue rounded-full p-4 cursor-pointer text-1">
        {id}. {type}
      </div>
    );
  };

export default Answer
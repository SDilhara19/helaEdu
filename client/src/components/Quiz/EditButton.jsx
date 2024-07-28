import React from 'react';
import Primary_Button from '../common/Primary_Button';

const EditButton = () => {
  return (
    <div className='flex justify-end mx-96 mt-32'>
      <Primary_Button name="Edit" className="bg-red-500 mr-3" /> 
    </div>
  );
}

export default EditButton;

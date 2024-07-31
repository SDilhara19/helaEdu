import React ,{useState} from "react";
import { approveTeachers } from '@services/TeacherService';

const DashboardTableRow = ({ name,email,validationProof,subjects}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeclineModalOpen, setIsDeclineModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openDeclineModal = () => setIsDeclineModalOpen(true);
  const closeDeclineModal = () => setIsDeclineModalOpen(false);

  const handleApprove = async () => {
    try {
      await approveTeachers({ email });
      window.location.reload();
      
    } catch (error) {
      console.error("Error approving teacher:", error);
    
    }
  };
  return (
    <div>
      {isModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <p className="py-4 text-3xl">Are you sure you want to approve this teacher?</p>
            <div className="modal-action">
              <button className="btn bg-red-400 text-white cursor-pointer" onClick={closeModal}>Cancel</button>
              <button className="btn bg-blue text-white cursor-pointer" onClick={handleApprove}>Approve</button>
            </div>
          </div>
        </dialog>
      )}

      {isDeclineModalOpen && (
        <dialog open className="modal">
          <div className="modal-box">
            <p className="py-4 text-3xl">Are you sure you want to decline this teacher?</p>
            <br />
            <input type="text" placeholder='Add your feedback' className='border border-blue w-full rounded-2xl p-5'></input>
            <div className="modal-action">
              <button className="btn bg-red-400 text-white cursor-pointer" onClick={closeDeclineModal}>Cancel</button>
              <button className="btn bg-blue text-white cursor-pointer" onClick={closeDeclineModal}>Decline</button>
            </div>
          </div>
        </dialog>
      )}
    
      <div className="w-full flex justify-center my-4">
      
        <div className="border border-blue rounded-2xl w-full h-14 flex justify-between items-center px-4">
          <div className="bg-yellow rounded-full w-10 h-10 flex items-center justify-center mr-4">
              <span className="text-white text-lg font-bold">{name.charAt(0)}</span>
            </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{name}</p>
          </div>
          <div className="flex-1 px-2">
            <p className="text-xl">{email}</p>
          </div>
          <div className="flex-1 px-2">
            <p className="text-xl">
              <a href={validationProof} download className="text-gray1 text-sm hover:text-yellow cursor-pointer ">
                {validationProof ? 'Download File' : 'No File Available'}
              </a>
              </p>
          </div>
          {/* <div className="flex-1 px-2">
            <p className="text-xl">{subjects}</p>
          </div> */}
          <div className="flex justify-between px-4">
            
              <div className="bg-blue rounded-2xl text-white text-lg px-2 py-1 mx-2 cursor-pointer" onClick={openModal}>Approve

              </div>
              <div className="bg-red-500 rounded-2xl text-white text-lg px-2 py-1 cursor-pointer" onClick={openDeclineModal}>Decline

              </div>
            
          </div>
          
        </div>
    </div>
    </div>
   
  );
};

export default DashboardTableRow;

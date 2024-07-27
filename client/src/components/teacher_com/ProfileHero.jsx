import React ,{useState} from 'react'
import profile from "@assets/img/articles/profile.jpg"
import cover from "@assets/img/articles/bannerP.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'


export default function ProfileHero({email}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [previewSrc, setPreviewSrc] = useState("https://lh3.googleusercontent.com/a-/AFdZucpC_6WFBIfaAbPHBwGM9z8SxyM1oV4wB4Ngwp_UyQ=s96-c");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        const src = URL.createObjectURL(file);
        setPreviewSrc(src);
        event.target.value = null; // Reset input value to allow uploading the same file again
        }
    };

    const handleEditClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
  return (
    <div>
        {isPopupOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray1  z-50  bg-opacity-50'>
          <div className='bg-white p-6  rounded-md shadow-md'>
            <form>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <img
                    id="preview_img"
                    className="h-40 w-40 object-cover rounded-full"
                    src={previewSrc}
                    alt="Current profile photo"
                  />
                </div>
                <label className="block">
                  <span className="sr-only text-2xl">Choose profile photo</span>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="block w-full text-2xl text-gray1
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-full file:border-0
                      file:text-2xl file:font-semibold
                      file:bg-violet-50 file:text-violet-700
                      hover:file:bg-violet-100"
                  />
                </label>
              </div>
              <div className="flex justify-end mt-4">
                <button 
                  type="button" 
                  className="bg-blue text-white px-2 py-1 rounded-md text-xl" 
                  onClick={handleClosePopup}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
       <div className="relative dark:bg-black ">
            <div className='relative'>
                <img src={cover} className="w-full h-96 object-cover" alt="Cover" />
                <div className='absolute flex items-center justify-center rounded-full w-10 h-10 p-2 bottom-5  top-50 left-50 right-7 bg-yellow'  >
                        <FontAwesomeIcon icon={faPencil} className='size-6' />
                    </div>
            </div>
            <div className="absolute top-3/4 left-32 rounded-full w-60 h-60">
                <div className='relative'>
                    <div className='absolute flex items-center justify-center rounded-full w-10 h-10 p-2 bottom-0  top-6 left-50 right-0 bg-yellow' >
                        <FontAwesomeIcon icon={faPencil} className='size-6'onClick={handleEditClick}  />
                    </div>
                    <img src={profile} className="rounded-full w-full h-full object-cover" alt="Profile" />
                </div>
               
            </div>
            <div className='absolute left-96 my-6 mx-10'>
                <h1 className='text-5xl'>M.K.P.Ahinsa</h1>
                <p className='text-3xl'>Teacher</p>
                <div className='  flex justify-start'>
                    <div className='rounded-full w-16 h-16 bg-yellow '>      
                    </div>
                    <div className='rounded-full w-16 h-16 bg-yellow mx-6 '>
                        
                        </div>
            </div>
            </div>
           
        </div>
       
      
    </div>
  );
}

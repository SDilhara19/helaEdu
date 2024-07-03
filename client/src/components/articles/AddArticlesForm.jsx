import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faShare } from '@fortawesome/free-solid-svg-icons';
import TextEditor from '@components/articles/TextEditor';

export default function AddArticlesForm() {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const [selectedTags, setSelectedTags] = useState([]);

    const handleSelect = (value) => {
        setSelectedTags((prevSelectedTags) => {
            if (prevSelectedTags.includes(value)) {
                return prevSelectedTags.filter((tag) => tag !== value);
            } else {
                return [...prevSelectedTags, value];
            }
        });
    };

    const isSelected = (value) => selectedTags.includes(value);

    return (
        <div className='mx-96 my-20 mw:mx-10'>
            <h1>Add Your Article</h1>
            <hr className='border-yellow border-t-4 w-1/5' />
            <form>
                <div className='p-10'>
                    <div className='flex justify-around align-baseline my-5'>
                        <div className='w-2/6 mw:w-1/3'><span className='text-3xl'>Title</span></div>
                        <div className='w-4/6 mw:w-2/3'><input className='border border-blue rounded-2xl w-full h-20 hover:border-yellow '></input></div>
                    </div>
                    <div className='flex justify-around align-baseline my-5'>
                        <div className='w-2/6'><span className='text-3xl'>Introduction</span></div>
                        <div className='w-4/6'><input className='hover:border-yellow border border-blue rounded-2xl w-full h-20'></input></div>
                    </div>
                    <div className='my-7'>
                        <span className='text-3xl'>Content</span>
                        <TextEditor />
                    </div>
                    <div>
                        <span className='text-3xl'>Select Your Tags</span>
                        <div className='flex justify-start my-5'>
                            {['sinhala1', 'sinhala2', 'sinhala3'].map((tag) => (
                                <div
                                    key={tag}
                                    className={`text-3xl border border-blue rounded-2xl px-5 py-2 mx-4 cursor-pointer ${isSelected(tag) ? 'bg-blue text-white' : ''}`}
                                    onClick={() => handleSelect(tag)}
                                >
                                    <input
                                        type="checkbox"
                                        value={tag}
                                        checked={isSelected(tag)}
                                        onChange={() => handleSelect(tag)}
                                        className='hidden'
                                    />
                                    <label className='text-2xl'>{tag}</label>
                                </div>
                            ))}
                        </div>
                        <div className="relative w-full">
                            <input className="hover:border-yellow border border-blue rounded-2xl w-full h-20 pr-16 pl-4" placeholder="Add your own tags" />
                            <button className="absolute top-0 right-0 h-full px-4 bg-blue text-white rounded-r-2xl" onClick={() => console.log('Button clicked')}>
                                <FontAwesomeIcon icon={faShare} />
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between mt-10'>
                        <div>
                            <span className='text-3xl align-middle'>Attach Additional files</span><br />
                            <div className='border border-dashed border-4 rounded-xl p-16 flex-c flex-col my-6'>
                                <FontAwesomeIcon icon={faUpload} className='text-4xl justify-center' /><br />
                                <p className='text-3xl'>Drag & drop or <span onClick={handleUploadClick} className='text-blue cursor-pointer'>Choose files</span> to upload</p>
                            </div>
                            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={(event) => console.log(event.target.files)} />
                        </div>
                        <div>
                            <span className='text-3xl'>Upload Cover Image</span><br />
                            <div className='border border-dashed border-4 rounded-xl p-16 flex-c flex-col my-6'>
                                <FontAwesomeIcon icon={faUpload} className='text-4xl justify-center' /><br />
                                <p className='text-3xl'>Drag & drop or <span onClick={handleUploadClick} className='text-blue cursor-pointer'>Choose files</span> to upload</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-blue text-4xl text-white rounded-2xl p-6'>Submit</button>
                </div>
            </form>
        </div>
    );
}

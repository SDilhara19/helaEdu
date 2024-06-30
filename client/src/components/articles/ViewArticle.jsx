import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'


export default function ViewArticle() {
  return (
    <div>
      <div className='border border-blue rounded-2xl p-10 m-12'>
        <h1 className='text-5xl'>The standard Lorem Ipsum passage, used since the 1500s</h1>
        <div className='card-actions flex justify-between mt-10'>
            <div className='flex justify-start align-baseline'>
                <img className="w-10 h-10 rounded-full" src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Rounded avatar" />
                <span className='text-2xl'> M.Perera</span>
            </div>
            <div>
                <span className='text-2xl'>23 March 2024</span>
            </div>
        </div>
        {/* tags */}
        <div className="flex justify-start m-7 ">
            <div className="badge badge-secondary mr-2 bg-yellow border-none text-blue px-7 py-5">NEW</div>
            <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue px-7 py-5">NEW</div>
            <div className="badge badge-secondary mr-2  bg-yellow border-none text-blue px-7 py-5">NEW</div>
        </div>
        <div>
            <img className="w-99/100 h-auto " src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Rounded avatar" />
        </div>
        <div className='text-xl'>
           <p className='text-2xl'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p> <br></br> 
           <p className='text-2xl'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p> <br></br>
           <p className='text-2xl'>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.

            odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p> 

        </div>
        <div className='flex justify-between'>
            <div className='border border-blue rounded-xl p-6 m-2'>
                <FontAwesomeIcon icon={faFile} className='text-4xl m-2 hover:text-yellow  hover:translate-x-1'/>
                <span className='text-3xl'>myFile.pdf  </span>
            </div>
            <div>

                <FontAwesomeIcon icon="fa-regular fa-thumbs-up"  className='text-xl' style={{color: "#74C0FC",}} />
                <FontAwesomeIcon icon="fa-regular fa-thumbs-up" style={{color: "#74C0FC",}} />
            </div>
        </div>
      </div>
    </div>
  )
}

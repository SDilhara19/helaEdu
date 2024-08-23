import React from 'react'
import { Footer, Header } from '@components/common'
import ActivityBar from '@components/reputation/ActivityBar'
import ReputationG from '@components/reputation/ReputationG'
export default function ReputationPoints() {
  return (  
    <>
      <Header />
      <div className="dashboard">
        <div className="dashboard-wrapper mb-9">
          <div className="sidebar-wrapper">
            <ActivityBar />
          </div>
          <div className="content-wrapper mx-32">
            <h1 className='my-10'>Reputation Points</h1>
            <div>
                <div className='mt-9 mb-10'>
                    <ReputationG/>
                </div>
                <div className='p-4'>
                    <table className='w-full'>
                        <thead>
                        <tr className='my-6 py-9 border-b border-gray-300'>
                            <th className='text-2xl py-4 w-2/6'>Points</th>
                            <th className='text-2xl py-4 w-4/6'>Activity</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className='border-b border-gray-300'>
                            <th className='py-4 flex justify-center'>
                                <div className='rounded-sm bg-blue w-20 h-14 p-4 text-white text-center'>+10</div>
                            </th>
                            <td className='py-4'>
                                <p>Add an article titled "Social Geographies of Education: Looking Within, and Beyond, School Boundaries"</p>
                            </td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <th className='py-4 flex justify-center'>
                                <div className='rounded-sm bg-blue w-20 h-14 p-4 text-white text-center'>+10</div>
                            </th>
                            <td className='py-4'>
                                <p>Your posts and helpful actions here help hundreds or thousands of people searching for help</p>
                            </td>
                        </tr>
                        <tr className='border-b border-gray-300'>
                            <th className='py-4 flex justify-center'>
                            <div className='rounded-sm bg-blue w-20 h-14 p-4 text-white text-center'>+10</div>
                            </th>
                            <td className='py-4'>
                            <p>Your posts and helpful actions here help hundreds or thousands of people searching for help</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>

            </div>
            
          </div>
        </div>
      </div>
      <Footer/>
            
    </>
    
  )
}

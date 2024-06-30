import { Header } from '@components/common'
import React from 'react'

export default function QuizFormat() {
  return (
    <div>
      <Header/>
      <div className='border border-blue rounded-xl m-20'>
        <div>
            <h1>Question <span>1/10</span></h1>

        </div>
        <div>
            <label>Enter your question </label>
            <input className='border border-blue rounded-xl h-32'></input>
        </div>
        <div>
            <label>Enter your options
            Check mark the right answer for your question</label>
            <div >
                <div>
                    <input type="checkbox" defaultChecked className="checkbox border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800" /><label>option 1</label>
                </div>
                <div>
                    <input type="checkbox" defaultChecked className="checkbox border-orange-400 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange] checked:border-indigo-800" /><label>option 2</label>
                </div>
            </div>
            
        </div>
       

      </div>
    </div>
  )
}

import React from 'react'

const HistoryTable = ({subject}) => {
  return (
    <div>
      <div className='h-full p-5 mx-auto rounded-xl bg-white-transparent w-2/3'>
        <div className="overflow-x-auto">
          <div className='s-topic text-blue text-center leading-tight'>Sanduni Dilhara</div>
          <div className='text-center text-gray1 s-text mt-0'>{subject}</div>
          <div className='mx-24 rounded-xl  p-10 overflow-y-scroll h-3/6'>
            <div className='mx-auto w-full '>
              <div class="table-main text-1 ">
                <div class="thead-main history-table">
             
                    <div class="td-main h-full flex items-center">
                      Quiz Number
                    </div>
                    <div class="td-main">
                      <div className='flex items-center p-0 '>
                        <div className='mx-4'>Score</div>
                      </div>
                    </div>
                    <div class="td-main">Time taken</div>
                 
                </div>
                <div class="tbody-main">
                  <div class="tr-main history-table">
                    <div class="td-main h-full flex items-center">
                      <div className="rank-circle">1</div>

                    </div>
                    <div class="td-main">6/10
                    </div>
                    <div class="td-main">8:12 s</div>
                  </div>
                  <div class="tr-main history-table">
                    <div class="td-main h-full flex items-center">
                      <div className="rank-circle">2</div>

                    </div>
                    <div class="td-main">6/10
                    </div>
                    <div class="td-main">8:12 s</div>
                  </div>
                  <div class="tr-main history-table">
                    <div class="td-main h-full flex items-center">
                      <div className="rank-circle">4</div>
                    </div>
                    <div class="td-main">
                     4/10
                    </div>
                    <div class="td-main">10:00 s</div>
                  </div>
            
                  <div class="tr-main history-table">
                    <div class="td-main h-full flex items-center">
                      <div className="rank-circle">6</div>

                    </div>
                    <div class="td-main">
                     7/10
                    </div>
                    <div class="td-main">9:40 s</div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryTable
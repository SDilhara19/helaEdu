import React from 'react'

const LeaderBoardTable = () => {
  return (
    <div>
      <div className='w-4/5 mx-auto my-10'>
        <div class="table-main text-1">
          <div class="thead-main">
   
          </div>
          <div class="tbody-main">
            <div class="tr-main">
              <div class="td-main h-full flex items-center">
                <div className="rank-circle">1</div>

              </div>
              <div class="td-main">
                <div className='flex items-center p-0 border'>
                  <div className="avatar m-0">
                    <div className="w-12 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className='mx-4'>Sanduni</div>
                </div>
              </div>
              <div class="td-main">1530</div>
            </div>
            <div class="tr-main">
              <div class="td-main h-full flex items-center">
                <div className="rank-circle">2</div>
              </div>
              <div class="td-main">
                <div className='flex items-center p-0 border'>
                  <div className="avatar m-0">
                    <div className="w-12 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className='mx-4'>Pathumi</div>
                </div>
              </div>
              <div class="td-main">1390</div>
            </div>
            <div class="tr-main">
              <div class="td-main h-full flex items-center">
                <div className="rank-circle">3</div>

              </div>
              <div class="td-main">
                <div className='flex items-center p-0 border'>
                  <div className="avatar m-0">
                    <div className="w-12 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className='mx-4'>Nirmal</div>
                </div>
              </div>
              <div class="td-main">1290</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardTable
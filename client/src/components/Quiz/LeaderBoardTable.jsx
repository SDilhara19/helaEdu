import React from 'react'

const LeaderBoardTable = () => {
  return (
    <div>
      <div className='w-4/5 mx-auto my-10'>
        <div class="table-main">
          <div class="thead-main">
            <div class="th-main">Header 1</div>
            <div class="th-main">Header 2</div>
            <div class="th-main">Header 3</div>
          </div>
          <div class="tbody-main">
            <div class="tr-main">
              <div class="td-main">Row 1, Col 1</div>
              <div class="td-main">Row 1, Col 2 Row 1, Col 2Row 1, Col 2Row 1, Col 2Row 1, Col 2Row 1, Col 2Row 1, Col 2</div>
              <div class="td-main">Row 1, Col 3</div>
            </div>
            <div class="tr-main">
              <div class="td-main">Row 2, Col 1</div>
              <div class="td-main">Row 2, Col 2</div>
              <div class="td-main">Row 2, Col 3</div>
            </div>
            <div class="tr-main">
              <div class="td-main">Row 3, Col 1</div>
              <div class="td-main">Row 3, Col 2</div>
              <div class="td-main">Row 3, Col 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoardTable
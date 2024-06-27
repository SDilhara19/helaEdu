import React from 'react'
import Header from '@/components/teacher_com/Header'
import TableRaw from '@/components/articles/TableRaw'
export default function AddArticles() {
  return (
    <div >
      <Header />
      <div className='flex justify-between mx-48 my-12'>
        <div>
            <h1>ARTICLES</h1>
            <hr></hr>
        </div>
        <div >
            <button className='bg-yellow text-white rounded-xl p-4 text-3xl'>Add Article</button>
        </div>
      </div>
      <div>
        <TableRaw />
        <TableRaw />
        <TableRaw />
        <TableRaw />
        <TableRaw />
      </div>
      

    </div>
  )
}

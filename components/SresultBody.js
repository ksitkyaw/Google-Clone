import React from 'react'
import SresultItem from './SresultItem'

export default function SresultBody() {
  return (
    <div className='ml-36'>
        <p className='text-slate-400'>About 9999999 results {"(in 121 milliseconds)"}</p>
        <div className='mt-5'>
            <SresultItem/>
            <SresultItem/>
            <SresultItem/>
            <SresultItem/>
        </div>
    </div>
  )
}

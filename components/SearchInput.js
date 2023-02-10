import { MagnifyingGlassIcon, MicrophoneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function SearchInput() {
  return (
    <div className='flex w-3/5 m-auto p-3 rounded-full shadow-md border'>
        <MagnifyingGlassIcon className='w-5 ml-2'/>
        <input
        type='text'
        name='search'
        id='search'
        className='grow focus:outline-none ml-5'
        />
        <div className='mx-2 divide-x divide-slate-300 flex justify-end'>
            <XMarkIcon className='w-5 mr-2'/>
            <MicrophoneIcon className='w-[28px] pl-2'/>
        </div>
        
    </div>
  )
}

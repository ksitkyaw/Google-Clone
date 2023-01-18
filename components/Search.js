import React from 'react'
import Image from 'next/image'

export default function Search() {
  return (
    <div className='w-6/12 m-auto'>
        <Image 
            className='m-auto'
            src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
            width={300}
            height={120}
            alt='google logo'
        />
        <form>
            <input
            className='w-full border border-gray-700 p-1 rounded-md'
            placeholder='Google Search...'
            type="text"
            id='search'
            name='search'
            required
            />
        </form>
    
    </div>
  )
}

import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, MicrophoneIcon }  from "@heroicons/react/24/outline"

export default function Search() {
  return (
    <div className='w-6/12 m-auto'>
        <Image 
            className='mt-[15vh] mx-auto'
            src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
            width={300}
            height={120}
            alt='google logo'
        />
        <form className='flex'>
          {/*below icon need z-index value because it comes before input element and so input covers its content
          which is not in the case of microphone icon which comes after input element */}
          <MagnifyingGlassIcon className='w-5 mr-[-30px]  z-10'/>
          <input
          className='w-full border border-gray-700 p-1 pl-[50px] rounded-md'
          placeholder='Google Search...'
          type="text"
          id='search'
          name='search'
          required
          />
          <MicrophoneIcon className='w-5 ml-[-30px]'/>

        </form>
    
    </div>
  )
}

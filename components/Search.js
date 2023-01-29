import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, MicrophoneIcon }  from "@heroicons/react/24/outline"
import Footer from './Footer'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function Search() {
  const router = useRouter()
  const searchRef = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchRef.current.value.trim()
    router.push(`search/?term=${term}`)
  }

  return (
    <div className='w-8/12 m-auto'>
        <Image 
            className='mt-[15vh] mx-auto'
            src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
            width={300}
            height={120}
            alt='google logo'
        />
        <form className='flex ml-10'>
          {/*below icon need z-index value because it comes before input element and so input covers its content
          which is not in the case of microphone icon which comes after input element */}
          <MagnifyingGlassIcon className='w-5 mr-[-50px]  z-10'/>
          <input
          ref={searchRef}
          className='shadow-md focus:outline-none w-full border border-slate-200 p-3 pl-[70px] rounded-full'
          placeholder='Google Search...'
          type="text"
          id='search'
          name='search'
          required
          />
          <MicrophoneIcon className='w-5 ml-[-50px]'/>

        </form>
        <div className='flex justify-evenly space-x-3 mt-6'>
          <button onClick={search} className='bg-blue-400 p-2 rounded-md'>Google Search</button>
          <button className='bg-blue-400 p-2 rounded-md'>I'm feeling lucky</button>
        </div>
        <Footer/>
    </div>
  )
}

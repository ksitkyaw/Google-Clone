import { MagnifyingGlassIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import SearchInput from './SearchInput'
import User from './User'

export default function SresultHeader({term}) {
    const [imageSearch, setImageSearch] = useState(false)
    const router = useRouter()

    const webSearchHandle = () => {
        setImageSearch(false)
        router.push(`search/?term=${term}&searchType=`)
    }
    
    const imgSearchHandle = () => {
        setImageSearch(true)
        router.push(`search/?term=${term}&searchType=image`)
    }
    return (
    <header>
        <div className='flex justify-between items-center px-5'>
            <Image
            src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
            style={{objectFit : 'cover'}}
            alt='google logo'
            width={100}
            height={50}
            />
            <SearchInput/>
            <div className='h-[35px]'>
                <User/>
            </div>
        </div>
        {/* bottom border removed when hover on list items should be done by javascript
        the below code is imperfect for that functionality */}
        <div className='border-b border-slate-200 pb-2 text-slate-500'>
            <ul className='flex ml-36 mt-14 space-x-8'>
                <li className={`flex cursor-pointer ${imageSearch ? '' : 'text-blue-600'}`} onClick={webSearchHandle}><MagnifyingGlassIcon className='w-5 mr-2'/><span>All</span></li>
                <li className={`flex cursor-pointer  ${imageSearch ? 'text-blue-600' : ''}`} onClick={imgSearchHandle}><VideoCameraIcon className='w-5 mr-2'/><span>Images</span></li>
            </ul>
            <div></div>
        </div>
    </header>
  )
}

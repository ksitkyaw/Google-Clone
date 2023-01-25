import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import User from './User'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className='flex justify-between p-6 text-stone-500 text-sm'>
      <div className='flex items-center'>
        <a className='pr-5' href="#">About</a>
        <a href="#">Store</a>
      </div>
      <div className='flex items-center'>
        <a className='pr-5' href="#">Gmail</a>
        <a className='pr-5' href="#">Images</a>
        {/* { session ? <button className="border bg-blue-500 p-3" onClick={() => signOut()}>Sign out</button>:<button className="border bg-blue-500 p-3" onClick={() => signIn()}>Sign in</button>} */}
        <User/>
      </div>
    </nav>
  )
}

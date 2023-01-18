import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex justify-between p-6 text-stone-500 text-sm'>
      <div className='flex'>
        <a className='pr-5' href="#">About</a>
        <a href="#">Store</a>
      </div>
      <div className='flex'>
        <a className='pr-5' href="#">Gmail</a>
        <a className='pr-5' href="#">Images</a>
        <a hrerf="#">Profile</a>
      </div>
    </nav>
  )
}

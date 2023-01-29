import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function User() {
    const {data: session} = useSession()
    if (session) {
        return (
            <>
            <Image
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width={50}
            height={3}
            style={{objectFit: 'cover'}}
            alt='profile pic'
            onClick={() => signOut()}
            />
            </>
        )
    }
  return (
    <button className="border bg-blue-500 p-2 rounded-lg text-white" onClick={() => signIn()}>Sign in</button>
  )
}

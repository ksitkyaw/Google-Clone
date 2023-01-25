import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import Image from 'next/image'

export default function User() {
    const {data: session} = useSession()
    if (session) {
        return (
            <>
            <Image
            className="rounded-full"
            src={session.user.image}
            width={50}
            height={3}
            style={{objectFit: 'cover'}}
            alt='profile pic'
            />
            </>
        )
    }
  return (
    <button className="border bg-blue-500 p-3" onClick={() => signIn()}>Sign in</button>
  )
}

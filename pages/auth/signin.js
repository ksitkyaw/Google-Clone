import React from 'react'
import Image from 'next/image'
import { getProviders, signIn} from "next-auth/react"

export default function  signin({ providers }) {
  return (
    <>
    <div className='w-6/12 m-auto'>
      {/* In below image component, height property is mandatory but to apply object-fit property, height is set to 'auto' */}
        <Image 
            className='mt-[15vh] mx-auto'
            src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
            width={300}
            height={320}
            style = {{objectFit: 'cover'}}
            alt='google logo'
        />
        <p className='text-center'>This is created for learning purpose</p>
        {Object.values(providers).map((provider) => {
          return(
          <button key={provider.name} className= "bg-lime-500 rounded-md mx-auto block mt-10 p-3" onClick={() => signIn(provider.id, { callbackUrl: "/"})}>Sign in with {provider.name}</button>
          )
          {/* In above button, the onClick function- signIn need the arguments provider.id and callbackUrl to redirect user to google sign in page and let them choose account. signIn function without arguments will only take user to 'auth/signin' page like in Navbar component*/}
        })}
    </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props:  { providers }
  }
}

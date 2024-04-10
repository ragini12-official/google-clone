'use client'

import Link from 'next/link';

import React from 'react'
import { useEffect } from 'react'

export default function Error({error}) {

    useEffect(() => {
        console.log(error);
    }, [error])

  return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>{error.message}</h1>
        <Link href="/" className='text-blue-500'>Try Again</Link>
    </div>
  )
}

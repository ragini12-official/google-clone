import React from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';

import SearchBox from '@/components/SearchModule_Search';

export default function SearchHeader() {
    return (
        <header className='sticky top-0 bg-white'>
            <div className='flex w-full p-6 items-center justify-between'>
                <Link href="/">
                    <Image
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'
                        alt='Google Logo'
                        width={120}
                        height={40}
                        priority
                    />
                </Link>

                <div className='flex-1'>
                    <SearchBox/>
                </div>

                <div className='hidden sm:inline-flex  ml-2 mr-2'>
                    <RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'/>
                    <TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'/>
                </div>

                <button className='bg-blue-600 text-white px-5 py-2 font-medium rounded-md hover:brightness-90 hover:shadow-md transition-shadow'>Sign In</button>
            </div>
        </header>
    )
}

'use client'

import React, { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBox() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const [query, setQuery] = useState(searchTerm || '');

    function handleSubmit (e) {
        e.preventDefault();
        if(!query.trim) {
            console.log("Empty searchTerm");
            return;
        }
        router.push(`/search/web?searchTerm=${query}`);
    }

  return (
    <Suspense>
    <form onSubmit={handleSubmit} className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center justify-around'>
        <input type='text' onChange={(e) => setQuery(e.target.value)} value={query} className='w-full focus:outline-none'/>
        <RxCross2 onClick={e => setQuery('')} className='text-2xl text-gray-500 cursor-pointer sm:mr-2'/>
        <BsFillMicFill className='hidden sm:inline-flex text-3xl text-blue-500 border-l-2 pl-2 border-gray-300 mr-3'/>
        <AiOutlineSearch onClick={handleSubmit} className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer'/>
    </form>
    </Suspense>
  )
}

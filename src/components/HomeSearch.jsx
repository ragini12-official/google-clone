'use client'

import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomeSearch() {

  const [input, setInput] = useState('');
  const [randomSearchLoader, setRandomSearchLoader] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  const randomSearch = async (e) => {
    setRandomSearchLoader(true);
    console.log("randomSearch called...");
    const response = await fetch(`https://random-word-api.herokuapp.com/word`)
      .then((res) => res.json())
      .then((data) => data[0]);
    if(!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoader(false);
    // console.log(response);
  }

  return (
    <>
      <form
        // onSubmit={handleSubmit}
        className='flex w-full mt-5 mx-auto max-w-{90%} 
      border border-gray-200 px-5 py-3 rounded-full 
      hover:shadow-md focus:shadow-md transition-shadow 
      sm:max-w-xl lg:max-w-2xl'>
        <AiOutlineSearch
          className='text-xl text-gray-700 mr-3 mt-1' />
        <input
          type='text'
          placeholder='Search Google or type a URL'
          className='flex-grow focus:outline-none '
          onChange={e => setInput(e.target.value)} />
        {/* <BsFillMicFill className='text-lg ' /> */}
        <Image 
        src="google_mic_icon.svg"
        alt="Microphone"
        width={30}
        height={30}
        />
      </form>

      <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-6 sm:space-x-4'>
        <button
          onClick={handleSubmit}
          type='submit'
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'>
          Google Search
        </button>
        <button
          onClick={randomSearch}
          disabled={randomSearchLoader}
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow disabled:opacity-75 disabled:shadow-sm'>
          {randomSearchLoader ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
    </>
  )
}

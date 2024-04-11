'use client'

import React, {Suspense} from 'react';

import {usePathname, useSearchParams} from 'next/navigation';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function PaginationButtons() {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get('searchTerm');
    const start = +searchParams.get('start') || 1;

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className='text-blue-700 flex px-10 mt-10 pb-2 justify-between sm:justify-start sm:space-x-44 sm:px-0'>
        {
            start >= 10 && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${start - 10}`}>
                    <div className='flex flex-col items-start hover:bg-gray-200 rounded-full'>
                        <BsChevronLeft className='h-5'/>
                        {/* <p>Previous</p> */}
                    </div>
                </Link>
            )
        }
        {
            start <= 90 && (
                <Link href={`${pathname}?searchTerm=${searchTerm}&start=${start + 10}`}>
                    <div className='flex flex-col items-end hover:bg-gray-200 rounded-full'>
                        <BsChevronRight className='h-5'/>
                        {/* <p>Next</p> */}
                    </div>
                </Link>
            )
        }
    </div>
    </Suspense>
  )
}

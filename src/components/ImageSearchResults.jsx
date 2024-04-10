import React from 'react';

import Link from 'next/link';
// import Image from 'next/image';

import PaginationButtons from '@/components/PaginationButtons';

export default function ImageSearchResults({ results }) {
    return (
        <div className='pb-24 sm:pb-40 mt-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4'>
                {
                    results.items.map((result) => {
                        return <div key={result.link} className='mb-8'>
                            <div className='group'>
                                <Link href={result.image.contextLink}>
                                    <img
                                        className='h-60 group-hover:shadow-lg w-full object-contain transition-shadow duration-100'
                                        src={result.link}
                                        alt={result.title}
                                    />
                                </Link>
                                <Link href={result.image.contextLink}>
                                    <h2 className='group-hover:underline truncate text-xl'>{result.title}</h2>
                                </Link>
                                <Link href={result.image.contextLink}>
                                    <p className='group-hover:underline truncate text-gray-500'>{result.displayLink}</p>
                                </Link>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='ml-16'>
                <PaginationButtons />
            </div>
        </div>
    )
}

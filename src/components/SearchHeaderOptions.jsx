'use client'

import React, {Suspense} from 'react';

import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function SearchHeaderOptions() {

    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const searchTerm = searchParams.get('searchTerm');

    const selectTab = ((tab) => {
        router.push(`/search/${tab === "Images" ? "images" : "web"}?searchTerm=${searchTerm}`);
    })

    return (
        <Suspense>
        <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
            <div onClick={() => selectTab("All")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && 'text-blue-600 border-blue-600'}`}>
                <AiOutlineSearch className='' />
                <p>All</p>
            </div>
            <div onClick={() => selectTab("Images")} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/images" && 'text-blue-600 border-blue-600'}`}>
                <AiOutlineCamera className='' />
                <p>Images</p>
            </div>
        </div>
        </Suspense>
    )
}

import React from 'react';

import Link from 'next/link';

import Parser from 'html-react-parser';
import PaginationButtons from './PaginationButtons';

export default function WebSearchResult({ results }) {
  return (
    <div className='sm:pb-40 w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
      <p className='text-gray-600 text-sm mb-5 mt-2'>
        About {results.searchInformation?.formattedTotalResults} results 
        in {results.searchInformation?.formattedSearchTime} seconds
      </p>
      {
        results.items?.map((result) => (
          <div key={result.link} className='mb-8 max-w-xl'>
            <div className='group flex-col'>
              <Link href={result.link}>
                {result.formattedUrl}
              </Link><br/>
              <Link href={result.link} className='group-hover:underline decoration-blue-800 text-xl truncate font-medium text-blue-800'>
                {result.title}
              </Link>
            </div>
            <p className='text-gray-600'>
              {Parser(result.htmlSnippet)}
            </p>
          </div>
        ))
      }

      <PaginationButtons/>
    </div>
  )
}

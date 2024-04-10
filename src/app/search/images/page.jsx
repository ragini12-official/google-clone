import React from 'react';

import ImageSearchResults from '@/components/ImageSearchResults';

export default async function ImageSearchPage({ searchParams }) {

    const start = searchParams.start || '1';
    const query = searchParams['searchTerm'];
    const API_URL = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${query}&searchType=image&start=${start}`;

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await fetch(API_URL);
    if(!response || !response.ok) {
        throw new Error("Could not fetch data from the API.");
    }
    const data = await response.json();
    const results = data.items;

    // const results = await fetch(API_URL)
    //     .then((res) => res.json())
    //     .then((data) => data.items);

    if(!results) {
        throw new Error("No results found!");
    }

    return (
        <div className=''>
            <ImageSearchResults results={data}/>
        </div>
    )
}

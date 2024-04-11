'use client'

import React, { useEffect, useState } from 'react'

export default function CountryLookup() {

    const [country, setCountry] = useState('');
    useEffect(() => {
        const getCountry = async () => {
            // const response = await fetch(``)
            
            //FETCHING REPSONSE FROM THE IPINFO API
            const ipinfo_response = await fetch(`https://ipinfo.io/json?token=08f63e1ca73e74`)
            .then(res => res.json())
            .then(data => data['country']);

            if(!ipinfo_response) {
                console.log("Couldn't fetch response from ipinfo API");
                return;
            }
            
            //CONVERT CCA-2 COUNTRY CODE TO COUNTRY NAME
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${ipinfo_response}`)
            .then(res => res.json())
            .then(data => data[0].name.common);

            if(!response) {
                console.log("Couldn't fetch response from restcountries API");
                return;
            }

            setCountry(response);
            
        }

        getCountry();

    }, []);

  return (
    <div>
        {country}
    </div>
  )
}

/**
 * Alternate API: https://extreme-ip-lookup.com/json/
 * 
 * This API will require an API key which is not possible to get at the time. So a different method has been used.
 */

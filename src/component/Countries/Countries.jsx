import React, { useEffect, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';
const Countries = () => {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=> setCountries(data))
  },[])
    return (
        <div>
            <div className='bg-success py-4 mb-2'>
            <h1 className='fs-5 fw-semibold text-center'>Visiting Country in the <span className='text-info'>World!!!</span></h1>
            <p className='text-center py-3 '>Available Countries: {countries.length}</p>
            </div>
            <div className='countries-container'>
            {
                countries.map((country)=>
                <Country country={country}>

                </Country>
                )
            }
            </div>
        </div>
    );
};

export default Countries;
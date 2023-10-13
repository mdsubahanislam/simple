import React from 'react';
import './Country.css'
const Country = (props) => {
    const{area,region,name,flags,population}=props.country
    console.log(props.country)
    return (
        <div className='country-container'>
            <h2>Name:{name.common}</h2>
             <img className='h-25 w-50 ' src={flags.png} alt="" />
             <p><small>Populations:{population}</small></p>
            <p><small>Area:{area}</small></p>
            <p><small>Reagion:{region}</small></p>
        </div>
    );
};

export default Country;
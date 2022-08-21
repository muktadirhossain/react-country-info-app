import React from 'react'
import { Link } from 'react-router-dom';
import './Country.css';

function Country(props) {
  const {name, region, flags, capital} = props.country;
  const countryName = name.common;
  console.log(flags.png)

 
  return (
    <div className='country-div '>

      <div className="flag-img">
        <img src={flags.png} alt="Flag-img" srcset="" />
        
      </div>

      <div className="country-info pt-5">
        <h3> {countryName}</h3>
        <p>Capital : {capital}</p>
        <p>Region: {region}</p>
        <Link className='btn mt-2' to={'/country/'+countryName}> See details</Link>   
      </div>

    </div>
  )
}

export default Country

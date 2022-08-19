import React from 'react'
import { Link } from 'react-router-dom';
import './Country.css';

function Country(props) {
  const {name, region, flags, capital} = props.country;


  //console.log(props.country);
  const countryName = name.common;
  // console.log(countryName)
   
  return (
    <div className='country-div '>

      <div className="flag-img">
        <img src={flags.png} alt="" srcset="" />
      </div>

      <div className="country-info">
        <h4>Country : {countryName}</h4>
        <h5>Capital : {capital}</h5>
        <p>Region: {region}</p>
        <Link className='btn' to={'/country/'+countryName}>See details</Link>   
      </div>

    </div>
  )
}

export default Country

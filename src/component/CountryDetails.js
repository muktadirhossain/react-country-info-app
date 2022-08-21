import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetails.css'

function CountryDetails() {
    const [data, setData] =useState({});

    const [country, setCountry] = useState({
      name : {},
      region: '',
      flag : '',
      currencies: [],
      capital: []
    })
   
    const {countryName} = useParams();


    useEffect(()=> {
        const url = `https://restcountries.com/v3.1/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data[0])
          
          const NewData = {
            name : data[0].name,
            region: data[0].region,
            flag : data[0].flags.png,
            currencies: Object.keys(data[0].currencies),
            capital: data[0].capital[0]
          };
          setCountry(NewData);
        })
        .catch(err => console.log(err))
    },[])


  return (
    <div className='country_details'>
      <h1>Country Details Page About :  {countryName.toUpperCase()}</h1> 
      <br />
      <img className='mb-3' src={country.flag} alt="Flag_image" />
      <br />
      <br />
      <p>Capital : {country.name.common}</p>
      <p>Official Name : {country.name.official}</p>
      <p>Capital : {country.capital}</p>
      <p>Continent : {country.region}</p>
      <p>Currency : {country.currencies[0]}</p>
      <p>Population : {data.population}</p>
  
    </div>
  )
}

export default CountryDetails

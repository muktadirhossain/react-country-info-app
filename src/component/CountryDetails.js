import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './CountryDetails.css'

function CountryDetails() {
    const [data, setData] =useState({});
    const [country, setCountry] = useState({
      name : {},
      region: '',
      flag : '',
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
            capital: data[0].capital[0]
          };
          setCountry(NewData);
        })
        .catch(err => console.log(err))
    },[])

    console.log(data)
    

  return (
    <div className='country_details'>
      <h1>Country Details Page About :  {countryName.toUpperCase()}</h1> 
      <br />
      <img src={country.flag} alt="Flag_image" />
      <br />
      <br />
      <p>Capital : {country.name.common}</p>
      <p>Official Name : {country.name.official}</p>
      <p>Capital : {country.capital}</p>
      <p>Continent : {country.region}</p>
      <p>Population : {data.population}</p>
      <p>Population : {data.capital}</p>
      <p>test  : {}</p>
    </div>
  )
}

export default CountryDetails

import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Country from './component/Country';





const App = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const url ='https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then( data => setCountry(data))
    .catch(err => console.log(err))
  }, []);

 //console.log(country);

  return (
    <div>
      <h1 className='heading-1 text-center my-3'>Total Country : {country.length}</h1>
      <div className='main'>
      {
        country.map( ct => <Country key={ct.name.official} country={ct} ></Country>)
      }
      </div>

    </div>    
  )
}

export default App

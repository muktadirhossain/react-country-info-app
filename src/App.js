import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Country from './component/Country';

const App = () => {
  const [country, setCountry] = useState([]);
  const [searchData, setSearchData] = useState('');


  useEffect(() => {
    const url ='https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then( data => setCountry(data))
    .catch(err => console.log(err))
  }, []);

  return (
    <div>
      <h1 className='heading-1 text-center my-3 '>Total Country : {country.length}</h1>

      <div class="center input-group mb-5">
          <input 
          onChange={(event) =>{ setSearchData(event.target.value); }} 
          type="text" 
          class="form-control" 
          placeholder="Search Country..." />
      </div>

      <div className='main'>
      {
        country.filter((country) => {
          if( searchData === ''){
            return country;
          } else if(country.name.common.toLowerCase().includes(searchData.toLowerCase())){
              return country;                                          
          }
        }).map( ct => <Country 
          key={ct.name.official} 
          country={ct} 
          />)
      }
      </div>

    </div>    
  )
}

export default App

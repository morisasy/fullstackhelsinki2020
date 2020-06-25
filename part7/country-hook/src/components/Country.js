import React from 'react'


const Country = ({ country }) => {
   
  if (!country) {
    return null
  }


    if (country.length ==0) {
      return (
        <div>
          not found...
        </div>
      )
    }

console.log(' Country ', country[0])
  
    return (
      <div>
        <h3>{country[0].name} </h3>
        <div>capital {country[0].capital} </div>
        <div>population {country[0].population}</div> 
        <img src={country[0].flag} height='100' alt={`flag of ${country[0].name}`}/>  
      </div>
    )
  }

export default Country
import React, { useState, useEffect } from 'react'

import  { useField } from './hooks'

import countryService from './services/services'

import Country from './components/Country'



const useCountry = (countryName) => {
  const [countries, setCountries] = useState(null)

  
  useEffect(() => {
    console.log('effect countryService: ')
    countryService
        .getAll()
        .then(initialCountry => {
          console.log('fetched countries', initialCountry)
         setCountries(initialCountry)
        })
  }, [])

  // filter country
  if (countryName === "") {
    return null
  }

  const country = countries.filter(country =>
    country.name.toLowerCase().includes(countryName.toLowerCase())
  )

  return country
}



const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const country = useCountry(name)

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    console.log('name a country', nameInput.value)

  }

  console.log(' setName ', name)
  console.log(' country ', country)

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      <Country country={country} />
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'
import Yelp from '../api/Yelp'


export default () => {
  const [results, setResults ] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (setTerm) => {
    console.log('hii')
    try {
      const response = await Yelp.get('/search', {
        params: {
          limit: 50,
          term: setTerm,
          location: 'Leytonstone'

        }
      })
      setResults(response.data.businesses)
      // console.log(response.data.businesses)
    } catch (err){
      console.log(err)
      setErrorMessage('Something went wrong')
    }
  }

  //Call search API

  // searchApi('pasta')
  useEffect(()=>{
    searchApi('chicken')

  },[])


  return [searchApi, results, errorMessage]

}

import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from '../Components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../Components/ResultList'

const SearchScreen = () => {

  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  console.log(results)

  const filterResultsByPrice = (price) => {
    return results.filter(result=>{
      return result.price === price

    })
    
  }
  
  return (
    <View>
      <SearchBar term={term}
        onTermChange={setTerm}
        onTermSubmit={ ()=> searchApi(term)}
      
      />
      <Text>{errorMessage}</Text> 
      <Text>We have found {results.length} results</Text>
      <ResultList results={filterResultsByPrice("£")} title="Cost Effective"/>
      <ResultList results={filterResultsByPrice("££")} title="Bit Pricier"/>
      <ResultList results={filterResultsByPrice("£££")} title="Big Spender"/>
      <ResultList results={filterResultsByPrice('££££')} title="OMG"/>



    </View>
  )
  
}

const styles = StyleSheet.create({
  
})


export default SearchScreen
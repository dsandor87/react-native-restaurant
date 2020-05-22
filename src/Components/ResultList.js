import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
 import ResultsDetail from './ResultDetail'

const ResultList = ({ title,results }) => {
  return <View>
    <Text style={styles.titleS}>{title}</Text>
    {/* <Text> Results: {results.length}</Text> */}
    <FlatList

      horizontal
      data={results}
      keyExtractor={ result => result.id}
      renderItem={ ({ item }) => {
        return <ResultsDetail result={item}/>

  
      }
      }







    />
  </View>
  
}

const styles = StyleSheet.create({
  titleS: {
    fontSize: 18,
    fontWeight: 'bold'
  }
  
})


export default ResultList
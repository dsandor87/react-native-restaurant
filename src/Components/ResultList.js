import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultDetail'
import {withNavigation} from 'react-navigation'


const ResultList = ({ title,results,navigation }) => {
  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {/* <Text> Results: {results.length}</Text> */}
    <FlatList

      showsHorizontalScrollIndicator={false}
      horizontal
      data={results}
      keyExtractor={ result => result.id}
      renderItem={ ({ item }) => {
        return(
          <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>

        <ResultsDetail result={item}/></TouchableOpacity>)

  
      }
      }







    />
  </View>
  
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:15,    marginBottom: 5

  },
  container :{
    marginBottom: 10
  }
  
})


export default withNavigation(ResultList)
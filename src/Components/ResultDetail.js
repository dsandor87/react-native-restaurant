import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'



const ResultsDetail = ({ result }) => {
  return <View style={styles.container}>
    <Image style={styles.image} source={{ uri: result.image_url }}/>
    <Text  style={styles.name}>{result.name}</Text>
    <Text >{result.rating}Stars, {result.review_count} Reviews</Text>

  </View>
  
}


const styles = StyleSheet.create({

  image: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  container: {
    marginLeft:10
  }, 
  name: {
    fontWeight: 'bold'
    // fontSize: 16
  }
  
})

export default ResultsDetail
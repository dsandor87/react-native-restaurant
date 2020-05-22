import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

 const ResultShowScreen = ({navigation}) => {
     const id = navigation.getParam('id')
     console.log(id)

     return (
         <View>
             <Text>Result Show</Text>
         </View>
     )
   
 }
 
 const styles = StyleSheet.create({
     
 });

 export default ResultShowScreen 
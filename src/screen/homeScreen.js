import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';


export default function homeScreen(props) {

  const[food, setFood]=useState('candy')
  const changeFood =(foodGet)=>{
    setFood(foodGet)
  }

  return (
    <View style={styles.container}>
      <Text>home screen</Text>
      <Text>{food}</Text>
      <Button 
      title='go to next page'
      onPress={()=>props.navigation.push('HomeDetailScreen', {name:'jacabe',functionA:(arg)=>changeFood(arg)})}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helper/StorageHelper.js'

export default function profileScreen(props) {
  const [name, setName]=useState('User')
useEffect(()=>{
  loadStorage()
  console.log('useEffect')
},[])

  const loadStorage =async()=>{
    let nameGet = await StorageHelper.getMySetting('name')

    console.log('loadStorage')
    if (nameGet){ //if (name!==null)
      setName(nameGet)
    }
  }
const changeName = async()=>{
  try{
    await StorageHelper.setMySetting('name',name)
  }catch{
console.error(error)
  }
 
}
  return (
    <View style={styles.container}>
      <Text>profile screen</Text>
      <TextInput
      maxLength={10}
      style={{height:50, width:300, borderColor:'darkgray', backgroundColor:"gray", fontSize:28, textAlign:'center', color:'white'}}
      onChangeText={(text)=>setName(text)}
      value={name}
      />
      <Text>Hello {name}</Text>
      {/* <Button 
      title='go to profile detail screen'
      onPress={()=>props.navigation.push('profileDetailScreen')}/> */}
      <Button 
      title='set name'
      onPress={()=>changeName()}/>
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

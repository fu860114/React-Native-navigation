import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helper/StorageHelper.js'
import { useMappedState, useDispatch } from 'redux-react-hook';
import { changeName } from '../redux/action.js';


export default function profileScreen(props) {
  const [name, setName]=useState('User')
  const myNewName = useMappedState(state=>state.newName)
  const dispatch=useDispatch()

// useEffect(()=>{
//   loadStorage()
//   console.log('useEffect')
// },[])

//   const loadStorage =async()=>{
//     let nameGet = await StorageHelper.getMySetting('name')
      
//     console.log('loadStorage')
//     if (nameGet){ //if (name!==null)
//       setName(nameGet)
//     }
//   }
// const changeName = async()=>{
//   try{
//     await StorageHelper.setMySetting('name',name)
//   }catch{
// console.error(error)
//   }
 
// }
  return (
    <View style={styles.container}>
      <Text>profile screen</Text>
      <TextInput
      maxLength={10}
      style={{height:50, width:300, borderColor:'darkgray', backgroundColor:"gray", fontSize:28, textAlign:'center', color:'white'}}
      onChangeText={(text)=>setName(text)}
      value={name}
      />
      {/* <Text>Hello {name}</Text> */}
      <Text>Hello {myNewName}</Text>
      {/* <Button 
      title='go to profile detail screen'
      onPress={()=>props.navigation.push('profileDetailScreen')}/> */}
      {/* <Button 
      title='set name'
      onPress={()=>changeName()}/> */}
      <Button
      title='redux set name'
      onPress={()=>dispatch(changeName(name))}
      />
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

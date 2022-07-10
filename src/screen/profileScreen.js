import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helper/StorageHelper'

export default function profileScreen(props) {

  const [myBookCount, setMyBookCount]=useState(0)
  const [myBookListName, setMyBookListName]=useState([])

useEffect(()=>{
  const unsubscribe= props.navigation.addListener('focus',()=>{
    loadStorage()
  })
  return unsubscribe //移除監聽
},[myBookCount])

  const loadStorage =async()=>{
    let bookGet =await StorageHelper.getMySetting('mylist')

    //法1
    let a =JSON.parse(bookGet)
    let newArray =[]
    a.forEach((thing)=>{
      newArray.push(thing.animal_colour +'的'+thing.animal_kind)
    });
    setMyBookCount(a.length)
    setMyBookListName(newArray)
  }

//   const [name, setName]=useState('User')
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
      <Text>我的寵物{myBookCount}個</Text>
    {/* 法1渲染 */}
{
  myBookListName.map((pet, index)=>{
    return(<Text key={index}>認樣寵物為：{pet}</Text>)
  })
}


      {/* <TextInput
      maxLength={10}
      style={{height:50, width:300, borderColor:'darkgray', backgroundColor:"gray", fontSize:28, textAlign:'center', color:'white'}}
      onChangeText={(text)=>setName(text)}
      value={name}
      />
      <Text>Hello {name}</Text>
      <Button 
      title='go to profile detail screen'
      onPress={()=>props.navigation.push('profileDetailScreen')}/>
      <Button 
      title='set name'
      onPress={()=>changeName()}/> */}

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

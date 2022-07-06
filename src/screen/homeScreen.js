import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
var MOCKED_DATA=[
  {
    id:'1',
    note:'恭喜你',
    data:'2020/01/28 14:00'
  },
  {
    id:'2',
    note:'會員身份',
    data:'2020/02/02 12:00'
  },
  {
    id:'3',
    note:'撥款通知',
    data:'2020/03/03 13:00'
  },
  {
    id:'4',
    note:'恭喜你',
    data:'2020/01/28 14:00'
  },
  {
    id:'5',
    note:'會員身份',
    data:'2020/02/02 12:00'
  },
  {
    id:'6',
    note:'撥款通知',
    data:'2020/03/03 13:00'
  },
  {
    id:'7',
    note:'恭喜你',
    data:'2020/01/28 14:00'
  },
  {
    id:'8',
    note:'會員身份',
    data:'2020/02/02 12:00'
  },
  {
    id:'9',
    note:'撥款通知',
    data:'2020/03/03 13:00'
  }
]

export default function homeScreen(props) {

  const[food, setFood]=useState('candy')
  const [dataSource,setDataSource]=useState([])
  const changeFood =(foodGet)=>{
    setFood(foodGet)
  }
useEffect(()=>{
  var book =MOCKED_DATA
  setDataSource(book)
})
const showNoticeDetail=(cases)=>{
  props.navigation.push('HomeDetailScreen', {passProps:cases})
}

const renderBook=(cases)=>{
  return(
    <TouchableOpacity onPress={()=>showNoticeDetail(cases)}>
      <View>
      <View style={styles.MainView}>
        {/* <Image/> */}
        <View style={{flex:1}}>
          <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black', fontSize:15, marginTop:8}}>
            {cases.note}
          </Text>
          <Text ellipsizeMode='tail' numberOfLines={3} style={{fontSize:13, marginButtom:8}}>
            {cases.date}
          </Text>
        </View>
        <Image source={require('../../assets/img/ic_arrow_right.png')} style={styles.image}/>
        </View>
        <View style={styles.seperator}/>
        </View>  
    </TouchableOpacity>
  )
}
  return (
    <View>
      {/* <Text>home screen</Text>
      <Text>{food}</Text>
      <Button 
      title='go to next page'
      onPress={()=>props.navigation.push('HomeDetailScreen', {name:'jacabe',functionA:(arg)=>changeFood(arg)})}/>
      <StatusBar style="auto" /> */}

      <FlatList
      data={dataSource}
      renderItem={cases=>renderBook(cases.item)}
      keyExtractor={cases=>cases.id}
      style={{backgroundColor:'white'}}
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
  MainView:{
    height:80,
    flexDirection:'row',
    justifyContent:"center",
alignItems:'center',
backgroundColor:'white',
padding:8
  },
  seperator:{
    height:1,
    backgroundColor:'#ddd'
  },
  image:{
height:30,
width:30
  }
});

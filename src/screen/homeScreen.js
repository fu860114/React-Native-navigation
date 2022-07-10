import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as StorageHelper from '../helper/StorageHelper'

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
  // var book =MOCKED_DATA
  // setDataSource(book)
  fetchData()
},[])

useEffect(()=>{
  let getAll=[]
  dataSource.map(a=>{
    if(a.addToMyList===true){
      getAll.push(a)
    }
  })
  saveToStorage(getAll)
})

const saveToStorage=async(getMyBook)=>{
  try{
    await StorageHelper.setMySetting('mylist', JSON.stringify(getMyBook))
  }catch(err){
    console.log(err)
  }
  
}

const fetchData =()=>{
  const REQUEST_URL ='https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL'
  fetch(REQUEST_URL)
  .then((response)=>response.json())
  .then((respnseData)=>{
    setDataSource(respnseData)
  })
  .catch((err)=>{
    console.log('error is', err);
  })
}

const showNoticeDetail=(cases)=>{
  props.navigation.push('HomeDetailScreen', {passProps:cases})
}
const pressRow=(cases)=>{
  const newData= dataSource.map(a=>{
    let copyA={...a}
    if (copyA.animal_id===cases.animal_id){
      copyA.addToMyList=!copyA.addToMyList
    }
    return copyA
  }
    
  )
  setDataSource(newData)
}

const renderBook=(cases)=>{
  return(
    <TouchableOpacity onPress={()=>showNoticeDetail(cases)}>
      <View>
      <View style={styles.MainView}>
        <TouchableOpacity onPress={()=>pressRow(cases)}>
          {cases.addToMyList===true?<Image style ={styles.imageCheck} source={require('../image/下載.png')}/>:<Image style ={styles.imageCheck} source={require('../image/notcheck.png')}/>}
        </TouchableOpacity>
        {/* <Image/> */}
        <Image source={{uri:cases.album_file?cases.album_file:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'}} style={styles.thumbnail}/>

        <View style={{flex:1}}>
          <Text ellipsizeMode='tail' numberOfLines={3} style={{color:'black', fontSize:15, marginTop:8}}>
            {cases.animal_place}
          </Text>
          <Text ellipsizeMode='tail' numberOfLines={3} style={  {fontSize:13, marginButtom:8}}>
            {cases.animal_bodytype==='MEDIUM'?'中型':
            cases.animal_bodytype==='SMALL'?'小型':'大型'
            }{'/'+cases.animal_colour+'的'+cases.animal_kind}
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
      keyExtractor={cases=>cases.animal_id.toString()}
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
  },
  thumbnail:{
    width:50,
    height:60,
    marginRight:10
  },
  imageCheck:{
    width:25,
    height:25,
    marginRight:10
  }
});

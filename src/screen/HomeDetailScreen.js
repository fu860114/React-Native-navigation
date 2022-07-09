import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function HomeDetailScreen(props) {
  const passProps=props.route.params.passProps||'nothing get'
  return (
    <View style={styles.container}>
      {/* <Text>home detail screen</Text> */}
      {/* <Text>{passProps.note}</Text> */}
      {/* <Button
      title='go back'
      onPress={()=>props.navigation.pop()}/>
      <StatusBar style="auto" />
      <Text>{props.route.params.name|| 'nothing get'}</Text>
      nothing get 為預設default， 當home screen沒回傳值時使用 */}

      {/* <Button
      title='change first page food'
      onPress={()=>props.route.params.functionA('Apple')}/> */}
  <Text>{passProps.animal_kind+""+passProps.animal_colour}</Text>
  <Text>{passProps.animal_place}</Text>
  <Text>{passProps.shelter_tel}</Text>
  <Image source={{uri:passProps.album_file?passProps.album_file:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'}} style={styles.thumbnail}/>
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
  thumbnail:{
    width:250,
    height:260,
    marginRight:10
  }
});

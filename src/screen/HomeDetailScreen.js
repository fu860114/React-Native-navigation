import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeDetailScreen(props) {
  const passProps=props.route.params.passProps||'nothing get'
  return (
    <View style={styles.container}>
      <Text>home detail screen</Text>
      <Text>{passProps.note}</Text>
      {/* <Button
      title='go back'
      onPress={()=>props.navigation.pop()}/>
      <StatusBar style="auto" />
      <Text>{props.route.params.name|| 'nothing get'}</Text>
      nothing get 為預設default， 當home screen沒回傳值時使用 */}

      {/* <Button
      title='change first page food'
      onPress={()=>props.route.params.functionA('Apple')}/> */}

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

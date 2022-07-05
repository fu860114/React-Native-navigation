import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function homeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>home screen</Text>
      <Button 
      title='go to next page'
      onPress={()=>props.navigation.push('HomeDetailScreen')}/>
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

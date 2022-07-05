import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function profileScreen(props) {
  return (
    <View style={styles.container}>
      <Text>profile screen</Text>
      <Button 
      title='go to profile detail screen'
      onPress={()=>props.navigation.push('profileDetailScreen')}/>
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

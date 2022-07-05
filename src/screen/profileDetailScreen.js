import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function profileDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Text>profile detail screen</Text>
      <Button
      title='go back'
      onPress={()=>props.navigation.pop()}/>
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
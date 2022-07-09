import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homeScreen from './src/screen/homeScreen';
import profileScreen from './src/screen/profileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDetailScreen from './src/screen/HomeDetailScreen';
import profileDetailScreen from './src/screen/profileDetailScreen';

//for redux
import createStore from './src/redux/store';
import { StoreContext } from 'redux-react-hook';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyHomeStack(){
  return(
<Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: {backgroundColor:'blue'},
        headerBackTitle:'返回',
        headerTintColor:'white'
      }}>
        <Stack.Screen name="Home" component={homeScreen} />
        <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{title:'My Detail'}}/>
      </Stack.Navigator> 
  )
}
 function MyProfileStack(){
  return(
    <Stack.Navigator
          initialRouteName='Profile'
          screenOptions={{
            headerStyle: {backgroundColor:'blue'},
            headerBackTitle:'返回2',
            headerTintColor:'white'
          }}>
            <Stack.Screen name="profile" component={profileScreen} />
            <Stack.Screen name="profileDetailScreen" component={profileDetailScreen} options={{title:'My Detail2'}}/>
          </Stack.Navigator> 
      )
 }

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName='Settings'
      screenOptions={({route})=>({
        tabBarIcon: ({color, focused})=>{
          // if (route.name =='Home'){
          //   return <Ionicons name={'ios-trophy'} size ={25} color={color}/>
          // } else if(route.name =='Settings'){
          //   return <Ionicons name={'ios-options'} size ={25} color={color}/>
          // }
          let iconName
          if (route.name =='Home'){
            iconName=focused? 'ios-information-circle' :'ios-information-circle-outline'
          } else if(route.name =='Settings'){
            // iconName='ios-options'
            return <Image
             source={require('./src/image/purelogo.png')}
             style={{width:20, height:20}}
            />
          }
          return <Ionicons name={iconName} size ={25} color={color}/>
        }

      })}
      tabBarOptions={{
        activeTintColor:'tomato',
        inactiveTintColor:'gray'
      }}
      >
        <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Settings" component={MyProfileStack} />
      </Tab.Navigator>

    </NavigationContainer>

    
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

export default MyApp = ()=>(
  <StoreContext.Provider value={store}>
    <App/>
  </StoreContext.Provider>
)
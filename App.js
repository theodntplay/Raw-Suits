import React from 'react';
import Login from './app/Screens/Login';
import Signup from './app/Screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/Screens/Home';
// import { StyleSheet,View } from 'react-native';


export default function App() {
  const MainNavigator = createStackNavigator();
  return (
    
      <NavigationContainer>
          <MainNavigator.Navigator screenOptions={{headerShown:false}}>
          <MainNavigator.Screen name="Login" component={Login}/>
          <MainNavigator.Screen name="Signup" component={Signup}/>
          <MainNavigator.Screen name="Home" component={Home}/>
          </MainNavigator.Navigator>
      </NavigationContainer>
    
  );
};

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:'center',
//   }
// })

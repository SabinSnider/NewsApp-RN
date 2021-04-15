import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
        <MainStack.Screen name="Home" component={HomeScreen}></MainStack.Screen>
        <MainStack.Screen
          name="Detail"
          component={DetailsScreen}></MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

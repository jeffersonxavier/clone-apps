import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../screens/Feed';
import Logo from '../assets/instagram.png';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitle: <Image source={Logo}/>,
        headerTitleStyle: {
          padding: 10,
        },
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      }}>
        <Stack.Screen name="Feed" component={Feed}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

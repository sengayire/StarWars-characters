import React from 'react'; 
import {TouchableOpacity, Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../screens';
import {Profile} from '../screens';
import {UserList} from '../screens';
import {UserInfo} from '../screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="Login"
       headerMode='none'
      >
        <Stack.Screen  name="Login" component={Login}  options={{ title: ' ' }}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="UserList" component={UserList}  options={{ title: 'GitHub users' }}/>
        <Stack.Screen name="UserInfo" component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
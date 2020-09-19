import React from 'react'; 
import {TouchableOpacity, Text} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../screens';
import {Profile} from '../screens';
import {UserList} from '../screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       initialRouteName="Login"
       headerMode='screen'
      >
        <Stack.Screen  name="Login" component={Login}  options={{ title: ' ' }}/>
        <Stack.Screen name="Profile" component={Profile}  options={{header: ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <View><Text>Here</Text></View>
  );
}}} />
        <Stack.Screen name="UserList" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
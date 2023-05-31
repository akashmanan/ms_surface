import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login/login';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

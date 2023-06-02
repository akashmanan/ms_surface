import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, InspectionListing, CreateInspection} from '@screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="InspectionListing" component={InspectionListing} />
      <Stack.Screen name="CreateInspection" component={CreateInspection} />
    </Stack.Navigator>
  );
};

export default Navigation;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, InspectionListing, CreateInspection} from '@screens';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const Navigation = () => {
  const {accessToken} = useSelector(state => state.authReducer);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!accessToken ? (
        <Stack.Screen name="Login" component={Login} />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="InspectionListing"
            component={InspectionListing}
          />
          <Stack.Screen name="CreateInspection" component={CreateInspection} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default Navigation;

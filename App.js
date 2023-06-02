import 'react-native-gesture-handler';
import * as React from 'react';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import Route from './src/';
enableScreens();
function App() {
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
}
export default App;

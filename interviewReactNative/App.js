/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HowTo from './pages/howTo';
import Meetings from './pages/meetings';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Getting Started" component={HowTo} />
      <Stack.Screen name="Meetings" component={Meetings} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

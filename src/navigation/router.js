import React from 'react';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import {createStackNavigator} from '@react-navigation/stack';
import SearchDestinationPage from '../screens/search/destination';
import GuestsScreen from '../screens/guests';
import HomeTabNavigator from './homeTabNavigator';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={'Search Destination'}
          component={SearchDestinationPage}
          options={{
            title: 'Search your destination',
          }}
        />

        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{
            title: 'How many people?',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

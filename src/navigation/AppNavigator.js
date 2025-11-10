import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ConferenceListScreen from '../screens/ConferenceListScreen';
import ConferenceDetailScreen from '../screens/ConferenceDetailScreen';
import ConferenceMapScreen from '../screens/ConferenceMapScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Conferencias" component={ConferenceListScreen} />
    <Stack.Screen name="Detalle" component={ConferenceDetailScreen} />
    <Stack.Screen name="Mapa" component={ConferenceMapScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
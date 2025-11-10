import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style='light' />
      <NavigationContainer>
        <CategoriesScreen />
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
});

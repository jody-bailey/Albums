import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

export default App;

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

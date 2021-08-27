import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SampleListItem from './components/SampleList';

export default function App() {
  return (
    <View style={styles.container}>
    <SampleListItem/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pro: {
    backgroundColor: 'red',
    padding:30
  },

  input:{
    borderWidth : 1,
    borderColor : '#777',
    padding:10,
    margin:10,
  },

  todos:{
    borderColor : 'white',
    borderWidth : 1,
    margin :10,
    padding : 50,

  }
  
});

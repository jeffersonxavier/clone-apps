import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B10AE',
  },
});

export default Main;

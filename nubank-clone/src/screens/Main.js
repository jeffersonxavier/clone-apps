import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Content from '../components/Content';

const Main = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Content/>
      <Tabs/>
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

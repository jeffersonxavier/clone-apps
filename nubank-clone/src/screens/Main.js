import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import Content from '../components/Content';

const Main = () => {
  const translateY = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <Header/>
      <Content translateY={translateY}/>
      <Tabs translateY={translateY}/>
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

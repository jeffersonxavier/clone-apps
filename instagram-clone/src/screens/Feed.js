import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Logo from '../assets/instagram.png'

const Feed = () => (
  <View style={styles.container}>
    <Image source={Logo}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Feed;

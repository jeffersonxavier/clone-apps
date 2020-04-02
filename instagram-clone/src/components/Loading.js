import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

const Loading = () => {
  return (
    <ActivityIndicator style={styles.loading} size="small" color="#999"/>
  );
}

const styles = StyleSheet.create({
  loading: {
    marginVertical: 30,
  },
});

export default Loading;

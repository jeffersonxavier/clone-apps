import React from 'react';
import Router from './src/routes';
import { StatusBar } from 'react-native';
import { COLORS } from './src/constants/index'

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor={COLORS.STATUS_BAR} />
      <Router />
    </>
  );
}

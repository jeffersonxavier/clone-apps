import React from 'react';
import { StatusBar } from 'react-native';
import Router from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="#000"/>
      <Router/>
    </>
  );
}

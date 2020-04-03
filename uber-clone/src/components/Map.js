import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView from 'react-native-maps';
import Search from './Search';

const Map = () => {
  const [ currentRegion, setCurrentRegion ] = useState(null);
  
  useEffect(() => {
    const loadInitialLocation = async () => {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        });
      }
    };

    loadInitialLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={currentRegion}
        showsUserLocation
        loadingEnabled
      />
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  mapStyle: {
    width: '100%',
    height: '100%',
    marginTop: Platform.OS === 'android' ? 23 : 0,
  },
});

export default Map;

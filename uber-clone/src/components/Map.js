import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import MapView from 'react-native-maps';

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
  mapStyle: {
    width: '100%',
    height: '100%',
    marginTop: 45,
  },
});

export default Map;

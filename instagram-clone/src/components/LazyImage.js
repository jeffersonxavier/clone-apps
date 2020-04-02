import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, Animated } from 'react-native';

const LazyImage = ({ smallSource, source, aspectRatio, shouldLoad }) => {
  const opacity = new Animated.Value(0);
  const [ loaded, setLoaded ] = useState(false);

  useEffect(() => {
    if (shouldLoad)
      setLoaded(true);
  }, [shouldLoad]);
  
  const handleAnimate =() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      resizeMode="contain"
      source={smallSource}
      style={[styles.image, { aspectRatio }]}
      blurRadius={0.7}
    >
      {
        loaded &&
        <Animated.Image
          source={source}
          style={[
            styles.image,
            { aspectRatio, opacity },
          ]}
          onLoadEnd={handleAnimate}
        />
      }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
  },
});

export default LazyImage;

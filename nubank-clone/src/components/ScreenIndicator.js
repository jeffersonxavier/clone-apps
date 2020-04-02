import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Icon = ({ checked }) => (
  <MaterialIcons
    style={styles.iconItem}
    name="fiber-manual-record"
    size={10}
    color={checked ? '#fff' : 'rgba(255, 255, 255, 0.3)'}
  />
);

const ScreenIndicator = () => {
  return (
    <View style={styles.icons}>
      <Icon/>
      <Icon checked/>
      <Icon/>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },

  iconItem: {
    paddingHorizontal: 3,
  },
});

export default ScreenIndicator;

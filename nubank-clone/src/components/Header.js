import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Logo from '../assets/img/Nubank_Logo.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={Logo} />
        <Text style={styles.title}>Jefferson</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-down" size={25} color="#AAAAAA" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 30,
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },

  icon: {

  },
});

export default Header;

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-generator';

const Menu = ({ translateY }) => {
  return (
    <Animated.ScrollView
      contentContainerStyle={styles.container}
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 350],
          outputRange: [0, 1],
        }),
      }}
    >
      <View style={styles.code}>
        <QRCode
          value="https://github.com/jeffersonxavier"
          size={80}
          fgColor='#fff'
          bgColor='#8B10AE'
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Banco 260 - Nu Pagamentos S.A.</Text>
        <Text style={styles.headerText}>Agência 0001</Text>
        <Text style={styles.headerText}>Conta 1234567-8</Text>
      </View>

      <View style={styles.nav}>
        <View style={styles.navItem}>
          <MaterialIcons name="help-outline" size={25} color="#fff" />
          <Text style={styles.navItemText}>Me ajuda</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="#fff" />
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="person-outline" size={25} color="#fff" />
          <Text style={styles.navItemText}>Perfil</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="#fff" />
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="credit-card" size={25} color="#fff" />
          <Text style={styles.navItemText}>Configurar Cartão</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="#fff" />
        </View>
        <View style={styles.navItem}>
          <MaterialIcons name="smartphone" size={25} color="#fff" />
          <Text style={styles.navItemText}>Configurações do app</Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="#fff" />
        </View>
      </View>

      <TouchableOpacity style={styles.signoutButton} activeOpacity={0.7}>
        <Text style={styles.signoutButtonText}>SAIR DA CONTA</Text>
      </TouchableOpacity>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 30,
  },

  code: {
    backgroundColor: '#fff',
    padding: 5,
  },

  header: {
    alignItems: 'center',
    paddingTop: 10,
  },

  headerText: {
    color: '#fff',
  },

  nav: {
    marginHorizontal: 30,
    marginTop: 30,
    width: '100%',
    borderTopWidth: 0.7,
    borderColor: 'rgba(255, 255, 225, 0.7)',
  },

  navItem: {
    flexDirection: 'row',
    borderBottomWidth: 0.7,
    borderColor: 'rgba(255, 255, 225, 0.7)',
    paddingVertical: 10,
    alignItems: 'center',
  },

  navItemText: {
    flex: 1,
    color: '#fff',
    paddingLeft: 10,
    fontSize: 15,
  },

  signoutButton: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderRadius: 4,
    marginTop: 20,
    padding: 12,
    borderColor: 'rgba(255, 255, 225, 0.7)',
  },

  signoutButtonText: {
    color: '#fff',
    fontSize: 15,
  }
});

export default Menu;

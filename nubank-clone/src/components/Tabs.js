import React from 'react';
import { StyleSheet, View, ScrollView, Text, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TabItem = ({ icon, title }) => (
  <View style={styles.tabItem}>
    <MaterialIcons name={icon} size={25} color="#FFF" />
    <Text style={styles.tabText}>{title}</Text>
  </View>
);

const Tabs = ({ translateY }) => {
  return (
    <Animated.View style={[
      styles.tabs,
      {
        opacity: translateY.interpolate({
          inputRange: [0, 300],
          outputRange: [1, 0],
        }),
      },
    ]}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        <TabItem title="Indicar Amigos" icon="person-add" />
        <TabItem title="Recarga de Celular" icon="smartphone" />
        <TabItem title="Cobrar" icon="monetization-on" />
        <TabItem title="Empréstimos" icon="account-balance" />
        <TabItem title="Depositar" icon="account-balance-wallet" />
        <TabItem title="Transferir" icon="local-atm" />
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  tabs: {
    height: 100,
    marginVertical: 20,
  },

  tabsContainer: {
    paddingLeft: 10,
    paddingRight: 20,
  },

  tabItem: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: 'space-between',
  },

  tabText: {
    fontSize: 13,
    color: '#fff'
  },
});

export default Tabs;

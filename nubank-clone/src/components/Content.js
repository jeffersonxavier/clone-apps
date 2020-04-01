import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const BottomIcon = ({ checked }) => (
  <MaterialIcons
    style={styles.bottomIconItem}
    name="fiber-manual-record"
    size={10}
    color={checked ? '#fff' : 'rgba(255, 255, 255, 0.3)'}
  />
)

const Content = () => {
  const [ showBalance, setShowBalance ] = useState(false);
  return (
    <View style={styles.card}>
      <View style={styles.cardBody}>
        <View style={styles.header}>
          <View style={styles.title}>
            <MaterialIcons name="attach-money" size={25} color="#666" />
            <Text style={styles.text}>Conta</Text>
          </View>
          <MaterialIcons
            onPress={() => setShowBalance(!showBalance)}
            name={showBalance ? 'visibility-off' : 'visibility'}
            size={25}
            color="#666"
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Saldo Disponível</Text>
          {
            showBalance
            ? <Text style={styles.balance}>R$ 199.588,78</Text>
            : <View style={styles.hideBalance}/>
          }
        </View>
        <View style={styles.annotation}>
          <MaterialIcons name="local-atm" size={25} color="#666" />
          <Text style={styles.annotationText}>
            Transferência de R$ 86,00 feita para Fulano de Tal hoje.
          </Text>
          <MaterialIcons name="keyboard-arrow-right" size={25} color="#666" />
        </View>
      </View>

      <View style={styles.bottomIcons}>
        <BottomIcon/>
        <BottomIcon checked/>
        <BottomIcon/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxHeight: 400,
    marginBottom: 10,
    justifyContent: 'center',
    zIndex: 5,
  },

  cardBody: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginHorizontal: 20,
    height: '100%',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    color: '#666',
    fontSize: 18,
  },

  balance: {
    fontSize: 30,
  },

  hideBalance: {
    height: 40,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginTop: 5,
    width: '80%',
  },

  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },

  annotation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 30,
    borderRadius: 4,
  },

  annotationText: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 13,
  },

  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
  },

  bottomIconItem: {
    paddingHorizontal: 3,
  }
});

export default Content;

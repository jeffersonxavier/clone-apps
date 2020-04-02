import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import Menu from './Menu';

const Content = ({ translateY }) => {
  const [ showBalance, setShowBalance ] = useState(false);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationY } = event.nativeEvent;
      const offset = translationY >= 100 ? 400 : 0;
      
      if (translationY < 0) {
        translateY.setValue(400 + translationY);
        translateY.setOffset(0);
      }
      
      Animated.timing(translateY, {
        toValue: offset,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <View style={styles.card}>
      <Menu translateY={translateY}/>

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Animated.View style={[
          styles.cardBody,
          {
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, 400],
                  outputRange: [0, 400],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}>
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
        </Animated.View>
      </PanGestureHandler>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    maxHeight: 400,
    marginBottom: 10,
    zIndex: 5,
  },

  cardBody: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginHorizontal: 20,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingHorizontal: 30,
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
});

export default Content;

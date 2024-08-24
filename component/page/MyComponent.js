import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const MyComponent = () => (
  <View style={styles.container}>
    <LottieView
      source={require('../../assets/alert.json')}
      autoPlay
      loop
      style={styles.animation}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 400,
    height: 500,
  },
});

export default MyComponent;

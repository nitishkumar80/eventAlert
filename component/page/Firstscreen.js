import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import * as Font from 'expo-font';

export default function FirstScreen() {
  const navigation = useNavigation();
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
       
        // Ensure correct font file
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator style={styles.loader} size="large" color="#ffffff" />;
  }

  const handleSign = () => {
    navigation.navigate('EventData');
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/background.mp4')}
        style={styles.backgroundVideo}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <View style={styles.textTitle}>
            <Text style={styles.title}>Notify</Text>
            <Text style={styles.description}>
              Stay tuned for the latest updates!
            </Text>
            <Text style={styles.para}>
              All College Event notifications in one place
            </Text>
          </View>

          <LottieView
            source={require('../../assets/alert.json')}
            autoPlay
            loop
            style={styles.animation}
          />

          <TouchableOpacity style={styles.signbtn} onPress={handleSign}>
            <Text style={styles.signbtnText}>Let's Start</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.design}>Design By Nitish</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    alignItems: 'center',
  },
  textTitle: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 44,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold', // Use correct font family
    marginBottom: 10,
  },
  description: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  para: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  animation: {
    width: 400,
    height: 400,
    marginBottom: 20,
  },
  signbtn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  signbtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  design: {
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

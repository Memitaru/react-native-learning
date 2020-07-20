import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Mowm from './assets/mowm.jpg';
import Runty from './assets/runty.jpg'

export default function App(){ 

  const [buttonState, setButtonState] = useState(false)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{buttonState ? "Mowm" : "Runty"}</Text>
      <Image style={styles.image} source={buttonState ? Mowm : Runty} />
      <Button title="Toggle" onPress={() => setButtonState(!buttonState)} />
      <StatusBar style="auto" />
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
  image: {
    height: 300,
    width: 250
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold"
  }
});

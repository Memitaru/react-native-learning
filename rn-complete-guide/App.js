import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.goalInput} />
        <Button title="ADD" />
      </View>
      <View></View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  },
  goalInput: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    padding: 5,
    width: "80%"
  }
});

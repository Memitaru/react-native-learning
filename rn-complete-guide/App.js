import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: enteredGoal }])
    setEnteredGoal('')
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.goalInput} 
          onChangeText={goalInputHandler} 
          value={enteredGoal} />
        <Button 
          title="ADD" 
          onPress={addGoalHandler}
        />
      </View>
    <FlatList 
      data={courseGoals} 
      keyExtractor={(item, index) => item.uid}
      renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>{itemData.item.value}</Text>
        </View>
      )} 
    />

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
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});

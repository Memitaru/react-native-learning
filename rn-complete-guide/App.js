import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {


  const [courseGoals, setCourseGoals] = useState([])

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: goalTitle }])
  }

  return (
    <View style={styles.screen}>
    <GoalInput onAddGoal={addGoalHandler} />
    <FlatList 
      data={courseGoals} 
      keyExtractor={(item, index) => item.uid}
      renderItem={itemData => (
        <GoalItem itemData={itemData} />
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
  }
});

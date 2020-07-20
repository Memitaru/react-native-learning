import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {


  const [courseGoals, setCourseGoals] = useState([])
  const [addMode, setAddMode] = useState(false)

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { uid: Math.random().toString(), value: goalTitle }])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.uid !== goalId)
    })
  }

  return (
    <View style={styles.screen}>
    <Button title="Add New Goal" onPress={() => setAddMode(!addMode)}/>
    <GoalInput onAddGoal={addGoalHandler} viewModal={addMode} toggleModal={setAddMode} />
    <FlatList 
      data={courseGoals} 
      keyExtractor={(item, index) => item.uid}
      renderItem={itemData => (
        <GoalItem itemData={itemData} onDelete={removeGoalHandler} />
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

import React, {useState} from 'react';
import { View, TextInput, Button,StyleSheet } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
      }

    const addItem = () => {
      props.onAddGoal(enteredGoal)
      setEnteredGoal('')
    }

    return(
        <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.goalInput} 
          onChangeText={goalInputHandler} 
          value={enteredGoal} />
        <Button 
          title="ADD" 
          onPress={addItem}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center"
    },
    goalInput: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      padding: 5,
      width: "80%"
    }
  });

export default GoalInput;
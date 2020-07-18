import React, {useState} from 'react';
import { View, TextInput, Button,StyleSheet, Modal } from 'react-native'

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText)
      }

    const addItem = () => {
      if (enteredGoal !== ""){
        props.onAddGoal(enteredGoal)
        setEnteredGoal('')
        props.toggleModal(false)
      }
    }

    return(
      <Modal visible={props.viewModal} animationType="slide">
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
      </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1
    },
    goalInput: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      padding: 5,
      marginBottom: 10,
      width: '80%'
    }
  });

export default GoalInput;
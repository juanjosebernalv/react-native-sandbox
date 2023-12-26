import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

export default function GoalInput({ onAddGoal, visible, onEndGoal }) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (entered) => {
    setEnteredGoalText(entered);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };
  const endGoalHandler = () => {
    onEndGoal();
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput style={styles.textInput} placeholder='Your Course Goal'
          onChangeText={goalInputHandler} value={enteredGoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.ViewButton}>
            <Button title='Add Goal!' onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.ViewButton}>
            <Button title='Cancel' onPress={endGoalHandler} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    color: '#120438',
    borderRadius: 6
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 16
  },
  ViewButton: {
    width: '30%',
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }

});;

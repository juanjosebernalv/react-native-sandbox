import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function GoalItem({ text, onDelete, id }) {

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={onDelete.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}> {text} </Text>
      </ Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    fontWeight: '700',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5
  }
});

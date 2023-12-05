import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };
  const endAddGoalHandler = () => {
    setIsModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    console.log('DELETE', id);
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer} >
        <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler} />
        {isModalVisible && <GoalInput onAddGoal={addGoalHandler} visible={isModalVisible} onEndGoal={endAddGoalHandler} />}
        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals} alwaysBounceVertical="false" renderItem={(itemData) => {
            return (
              <GoalItem id={itemData.item.id} text={itemData.item.text} onDelete={deleteGoalHandler} />
            );
          }} keyExtractor={(item, index) => { return item.id; }} />
        </View>
      </View >
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});


import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';
import { StatusBar  } from 'expo-status-bar';

export default function App() {
  const [modalVisibleState, setModalVisibleState] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisibleState(true);
  }

  function endAddGoalHandler() {
    setModalVisibleState(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...courseGoals, {text: enteredGoalText, id: Math.random().toString()}
    ])
    endAddGoalHandler();
  }

  function onDeleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id );
    })
  }

  return (
    <>
    <StatusBar style="auto" />
    <View style={styles.appContainer}>
      <Button title='Add new goal' color='#a065ec' onPress={startAddGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={modalVisibleState} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={(itemData) => {
        return <GoalItem onDeleteItem={onDeleteGoalHandler} id={itemData.item.id} text={itemData.item.text}/>}} keyExtractor={(item, index) => { return item.id }} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },
  goalsContainer: {
    flex: 5
  }
});

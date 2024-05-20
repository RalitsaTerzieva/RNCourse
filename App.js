
import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...courseGoals, {text: enteredGoalText, id: Math.random().toString()}])
  }

  function onDeleteGoalHandler(id) {
    console.log('Delete')
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} alwaysBounceVertical={false} renderItem={(itemData) => {
        return <GoalItem onDeleteItem={onDeleteGoalHandler} text={itemData.item.text}/>}} keyExtractor={(item, index) => { return item.id }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});

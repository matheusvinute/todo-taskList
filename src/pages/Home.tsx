import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    setTasks([...tasks, newTaskTitle])
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    const checkTask = tasks.map(task => task.id === id ? {
      ...task,
      isComplet: !task.isComplet
    } : task);

    setTasks(checkTask);
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    const deleteTask = tasks.filter(task => task.id !== id);

    setTasks(deleteTask);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})
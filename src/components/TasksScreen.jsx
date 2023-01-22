import React, { useState } from 'react'
import { Button, FlatList, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import Task from './Task'

const TasksScreen = () => {

  const [task, setTask] = useState('')
  const [tasksList, setTasksList] = useState([])

  const renderTask = ({ item }) => {
    return (
      <Task value={item.value} taskID={item.key} removeTask={removeTask} />
    )
  }

  const removeTask = (key) => {
    setTasksList((list) => list.filter(item => item.key !== key))  
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior='padding'
      keyboardVerticalOffset={100}
    >
      <View style={styles.container}>
        <View style={{ display: 'flex', height: '90%' }}>
          <FlatList
            data={tasksList}
            renderItem={renderTask}
            keyExtractor={(item, index) => item.key}
          />
        </View>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.textInput}
            value={task}
            onChangeText={(text) => setTask(text)}
            placeholder="Enter the Task"
            />
          <Button
            title='Add'
            onPress={() => setTasksList(
              (list) => [{ value: task, key: Math.random().toString() }, ...list],
              setTask('')
            )}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default TasksScreen

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
  },
  viewInput: {
    display: 'flex',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
    padding: 5,
  }
})
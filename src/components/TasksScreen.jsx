import { getDatabase, onValue, push, ref, remove, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, FlatList, KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import Task from './Task'

const db = getDatabase()

const TasksScreen = () => {

  const [task, setTask] = useState('')
  const [tasksList, setTasksList] = useState([])

  function readTaskData() {
    onValue(ref(db, '/tasks'), (snapshot) => {
      const data = snapshot.val();
      const list = []
      for (let key in data ? data : []) {
        list.push({ key, ...data[key] })
      }
      setTasksList(list)
    })
  }

  function writeTaskData() {
    push(ref(db, '/tasks'), {
      value: task,
      completed: false
    })
  }

  function updateTaskData(key, completed) {
    update(ref(db, `/tasks/${key}`), {
      completed: completed
    })
  }

  function removeTaskData(key) {
    remove(ref(db, `/tasks/${key}`))
  }

  useEffect(() => {
    readTaskData()
  }, [])
  

  const renderTask = ({ item }) => {
    return (
      <Task
        value={item.value}
        taskID={item.key}
        removeTask={removeTaskData}
        completed={item.completed}
        updateTaskData={updateTaskData} 
        />
    )
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
            keyExtractor={(item) => item.key}
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
            onPress={() => (
              setTask(''),
              writeTaskData(tasksList)
            )
            }
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
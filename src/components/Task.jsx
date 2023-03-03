import Checkbox from 'expo-checkbox'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Task = ({ value, taskID, removeTask, updateTaskData }) => {
  
  const [isChecked, setChecked] = useState(false)

  return (
    <View style={isChecked ? styles.containerDone : styles.container}>
      <View style={styles.task}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={() => (
            setChecked(!isChecked),
            updateTaskData(taskID, !isChecked)
          )}
          color={isChecked ? 'green' : undefined} />
        <Text style={styles.text}>{value}</Text>
      </View>
      <View style={styles.button}>
        <Button title='Delete' color='white' onPress={() => removeTask(taskID)}/>
      </View>
    </View>
  )
}

export default Task

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 50,
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    flexDirection: 'row',
    margin: 5,
    alignSelf: 'center',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  containerDone: {
    display: 'flex',
    height: 50,
    width: '95%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    flexDirection: 'row',
    margin: 5,
    alignSelf: 'center',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    margin: 10,
  },
  text: {
    fontSize: 20,
    marginLeft: 16,
  },
  button: {
    width: 80,
    position: 'relative',
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    backgroundColor: 'red'
  }
})
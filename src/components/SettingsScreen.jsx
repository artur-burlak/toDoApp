import Checkbox from 'expo-checkbox'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { checkBox1, checkBox2, checkBox3 } from '../redux/actions/checkAction'

const SettingsScreen = () => {

  const dispatch = useDispatch()

  const isChecked = useSelector((store) => (store.check))
  
  const handleCheck = (number) => {
    switch (number) {
      case 1: {
        return dispatch(checkBox1())
      };
      case 2: {
        return dispatch(checkBox2())
      };
      case 3: {
        return dispatch(checkBox3())
      };
      default: return
      }
  }

  return (
    <View>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked.checkBox1} onValueChange={() => handleCheck(1)} />
        <Text>SMS</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked.checkBox2} onValueChange={() => handleCheck(2)}/>
        <Text>E-mail</Text>
      </View> 
       <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked.checkBox3} onValueChange={() => handleCheck(3)}/>
        <Text>Push</Text>
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  
  checkbox: {
    margin: 10
  }
})
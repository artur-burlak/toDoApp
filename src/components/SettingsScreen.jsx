import Checkbox from 'expo-checkbox'
import { get, ref, update } from 'firebase/database'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { database } from '../../firebaseConfig'
import { checkBox1, checkBox2, checkBox3, loadSettings } from '../redux/checkerSlice'

const SettingsScreen = () => {

  const dispatch = useDispatch()

  const { checker } = useSelector((state) => state)

  useEffect(() => {
    let loadedData = {}
    get(ref(database, 'settings'))
      .then((data) => loadedData = data.toJSON())
      .then(() => dispatch(loadSettings(loadedData)))
  }, [])
  
  const handleCheck = (number) => {
    switch (number) {
      case 1: {
        update(ref(database, 'settings'), {SMS: !checker.settings.SMS})
        return dispatch(checkBox1())
      };
      case 2: {
        update(ref(database, 'settings'), {Email: !checker.settings.Email})
        return dispatch(checkBox2())
      };
      case 3: {
        update(ref(database, 'settings'), {Push: !checker.settings.Push})
        return dispatch(checkBox3())
      };
      default: return
      }
  }

  return (
    <View>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={checker.settings.SMS} onValueChange={() => handleCheck(1)} />
        <Text>SMS</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={checker.settings.Email} onValueChange={() => handleCheck(2)}/>
        <Text>E-mail</Text>
      </View> 
       <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={checker.settings.Push} onValueChange={() => handleCheck(3)}/>
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
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import TasksScreen from './TasksScreen'
import SettingsScreen from './SettingsScreen'

const BottomTabNavigator = () => {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIconStyle: {display: 'none'}
        }}>
        <Tab.Screen
          name='Tasks'
          component={TasksScreen}
          options={{
            tabBarLabelStyle: { fontSize: 20 },
            tabBarItemStyle: {justifyContent: 'center', alignItems: 'center', borderRightWidth: 1, borderColor: 'grey'}
          }} />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarLabelStyle: { fontSize: 20 },
            tabBarItemStyle: {justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1, borderColor: 'grey'}
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})
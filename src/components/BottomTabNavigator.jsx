import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import SettingsScreen from './SettingsScreen'
import TasksScreen from './TasksScreen'

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
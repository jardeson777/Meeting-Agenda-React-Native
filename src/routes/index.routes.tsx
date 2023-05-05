import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeDaily from '../screens/HomeDaily';
import HomeMonthly from '../screens/HomeMonthly';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarItemStyle: {
          marginVertical: 20,
        },
        tabBarStyle: {elevation: 0},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarPressColor: '#fbfdfe',
        tabBarIndicatorContainerStyle: {
          backgroundColor: '#F4F6F7',
        },
        tabBarIndicatorStyle: {
          height: 50,
          backgroundColor: '#5A95FF',
          borderRadius: 50,
          width: 135,
          marginLeft: 20,
          marginBottom: 20,
        },
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen name="Monthly" component={HomeMonthly} />
      <Tab.Screen name="Daily" component={HomeDaily} />
    </Tab.Navigator>
  );
}

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeDaily from '../screens/HomeDaily';
import HomeMonthly from '../screens/HomeMonthly';
import colors from '../global/colors';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        tabBarItemStyle: {
          marginVertical: 40,
        },
        tabBarStyle: {elevation: 0},
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.black,
        tabBarPressColor: colors.white,
        tabBarIndicatorContainerStyle: {
          backgroundColor: colors.blue100,
        },
        tabBarIndicatorStyle: {
          height: 50,
          backgroundColor: colors.blue500,
          borderRadius: 50,
          width: 135,
          marginLeft: 20,
          marginBottom: 40,
        },
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen name="Monthly" component={HomeMonthly} />
      <Tab.Screen name="Daily" component={HomeDaily} />
    </Tab.Navigator>
  );
}

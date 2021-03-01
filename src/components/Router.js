import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DiscoveryScreen from '../screens/DiscoveryScreen/';
import CreatePostScreen from '../screens/CreatePostScreen/';
import NotificationScreen from '../screens/NotificationScreen/';
import ProfileScreen from '../screens/ProfileScreen/';
import HomeStackScreen from './HomeRoutes';

import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Router = () => (
  <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'Home') {
              return <Foundation name="home" size={24} color="black" />
            } 
            if (route.name === 'Discovery') {
              return <Feather name="search" size={24} color="black" />
            } 
            if (route.name === 'Post') {
              return <Feather name="plus-square" size={24} color="black" />
            } 
            if (route.name === 'Notification') {
              return    <AntDesign name="hearto" size={24} color="#4f4f4f" />
            } 
            if (route.name === 'Profile') {
              return <Ionicons name="person-outline" size={24} color="black" />
            } 
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
)

export default Router;
import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/';
import DiscoveryScreen from './src/screens/DiscoveryScreen/';
import CreatePostScreen from './src/screens/CreatePostScreen/';
import NotificationScreen from './src/screens/NotificationScreen/';
import ProfileScreen from './src/screens/ProfileScreen/';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Foundation } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
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
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

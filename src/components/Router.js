import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomHomeNavigator from './BottomHomeNavigator/';

import StoryScreen from '../screens/StoryScreen/'

// import DiscoveryScreen from '../screens/DiscoveryScreen/';
// import CreatePostScreen from '../screens/CreatePostScreen/';
// import NotificationScreen from '../screens/NotificationScreen/';
// import ProfileScreen from '../screens/ProfileScreen/';
// import HomeStackScreen from './HomeRoutes';

// import { Foundation } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons'; 
// import { Ionicons } from '@expo/vector-icons';

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen 
      name={"Home"} 
      component={BottomHomeNavigator}
      options={{
        headerShown: false,
      }} 
    />
    <RootStack.Screen 
		name="Story"
		component={StoryScreen}
		options={{
			headerShown: false,
		}} />
  </RootStack.Navigator>
)

export default Router;
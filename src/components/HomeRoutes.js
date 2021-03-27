import React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/images/logo.png';
import StoryScreen from '../screens/StoryScreen/'

const HomeStack = createStackNavigator();

const HomeRoutes = () => (

	<HomeStack.Navigator>
		<HomeStack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				title: 'Instagram',
				headerLeft: () => (
					<View style={{ marginLeft: 10 }}>
						<Feather name="camera" size={24} color="black" />
					</View>
				),
				headerRight: () => (
					<View style={{ marginRight: 10 }}>
						<Ionicons name="paper-plane-outline" size={25} />
					</View>
				),
				headerTitle: () => <Image source={logo} resizeMode="contain" style={{ width: 135, height: 50 }} />
			}}
		/>
		
	</HomeStack.Navigator>
);

export default HomeRoutes;

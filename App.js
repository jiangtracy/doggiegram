import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/components/Router';

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar barStyle="dark-content" />
			<Router />
		</NavigationContainer>
	);
}

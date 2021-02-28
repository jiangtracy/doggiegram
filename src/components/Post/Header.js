import React from 'react';
import { Entypo } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import ProfilePicture from '../ProfilePicture';

const Header = ({ imageUri, name }) => (
	<View style={styles.container}>
		<View style={styles.left}>
			<ProfilePicture uri={imageUri} size={40} />
			<Text style={styles.name}>{name}</Text>
		</View>
		<View style={styles.right}>
			<Entypo name="dots-three-vertical" size={16} />
		</View>
	</View>
)

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	name: {
		fontWeight: 'bold',
		alignSelf: 'center',
		color: '#3c3c3c',
	},
	left: {
		flexDirection: 'row',
	},
	right: {
		marginRight: 10
	},
})


export default Header;

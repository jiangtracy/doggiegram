import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProfilePicture from './ProfilePicture';

const Story = (props) => {

  const {
    story: {
      user: {
        imageUri,
        name,
        id,
      }
    }
  } = props;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Story", { userId: id });
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{ name }</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
  }
});

export default Story;

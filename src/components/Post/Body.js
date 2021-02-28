import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';

const Body = ({imageUri}) => (
  <Image source= {{uri: imageUri}} style={styles.image} />

)

const styles = StyleSheet.create({
  image : {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  }
})

export default Body;
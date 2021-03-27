import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Story from './UserStoryPreview.js';
import storiesData from '../data/stories/'


const Stories = () => {

  return (
    <FlatList 
      style={styles.container}
      data={storiesData}
      keyExtractor={({user: {id}}) =>  id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story story={item} />} 
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  }
})
export default Stories;

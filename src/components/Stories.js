import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Story from './Story';

const userData = [
  {
    imageUri: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=932&q=80',
    name: "Max",
  },
  {
    imageUri: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
    name: "Bella",
  },
  {
    imageUri: 'https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
    name: "Buddy",
  },
  {
    imageUri: 'https://images.unsplash.com/photo-1548658146-f142deadf8f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
    name: "Rocky",
  },
  {
    imageUri: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
    name: "Dumpling",
  },
  {
    imageUri: 'https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
    name: "Bao",
  },
  {
    imageUri: 'https://images.unsplash.com/photo-1548658146-f142deadf8f7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
    name: "Fluffy",
  },
]

const Stories = () => {

  return (
    <FlatList 
      style={styles.container}
      data={userData}
      key={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />} 
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  }
})
export default Stories;

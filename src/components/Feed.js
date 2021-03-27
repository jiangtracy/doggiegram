import React from 'react';
import Post from './Post/Post';
import Stories from './UserStoriesPreview';
import { FlatList } from 'react-native';

const data = [
  {
    id: '1',
    user : {
      imageUri: 'https://images.unsplash.com/photo-1560807707-8cc77767d783?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80',
      name: "Dumpling"
    },
    imageUri: 'https://images.unsplash.com/photo-1561297108-98ab65d92bd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
    caption: 'Beautiful city #instagram',
    likesCount: 1234,
    postedAt: '6 minutes ago'
  },
  {
  id: '2',
  user : {
    imageUri:'https://images.unsplash.com/photo-1548658166-136d9f6a7e76?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
    name: "Buddy"
  },
  imageUri: 'https://images.unsplash.com/photo-1494947665470-20322015e3a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  caption: 'I want a talk',
  likesCount: 10000,
  postedAt: '8 minutes ago'
 }
];

const Feed = () => (
  <FlatList 
    ListHeaderComponent={Stories}
    data={data}
    renderItem={({item}) => <Post post={item} />}
    keyExtractor={({id}) => id}
  />
)

export default Feed; 
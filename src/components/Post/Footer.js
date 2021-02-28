import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const Footer = ({likesCount, caption, postedAt}) => (
  <View style={styles.container} >
    <View style={styles.icons} >
      <View style={styles.left} >
        <AntDesign name="hearto" size={24} color="#4f4f4f" />
        <EvilIcons name="comment" size={32} color="#4f4f4f" />
        <Ionicons name="paper-plane-outline" size={25} color="#4f4f4f" />
      </View>
      <FontAwesome name="bookmark-o" size={25} color="#4f4f4f" />
    </View>
    <Text style={styles.likes}>{likesCount} Likes</Text>
    <Text style={styles.caption}>{caption}</Text>
    <Text style={styles.postedAt}>{postedAt}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  left: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between'
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    fontWeight: 'bold',
    margin: 3,

  },
  caption: {
    margin: 3,
    
  },
  postedAt: {
    color: '#8c8c8c',
    margin: 3,
  }
})
  
export default Footer;
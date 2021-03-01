import React, {useState, useEffect} from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const Footer = ({likesCount : propsLikeCounts, caption, postedAt}) => {
  const [isLiked, setIsLinked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const onLike = () => {
    const amount = isLiked ? -1 : 1;
    setLikeCount(likeCount + amount);
    setIsLinked(!isLiked);
  }

  useEffect(() => {
    setLikeCount(propsLikeCounts);
  }, [])

  return (
    <View style={styles.container} >
      <View style={styles.icons} >
        <View style={styles.left} >
          <TouchableWithoutFeedback onPress={onLike}>
            {isLiked ? 
            <AntDesign name="heart" size={24} color="#e73838" /> :
            <AntDesign name="hearto" size={24} color="#4f4f4f" />
            }
          </TouchableWithoutFeedback>
          <EvilIcons name="comment" size={32} color="#4f4f4f" />
          <Ionicons name="paper-plane-outline" size={25} color="#4f4f4f" />
        </View>
        <FontAwesome name="bookmark-o" size={25} color="#4f4f4f" />
      </View>
      <Text style={styles.likes}>{likeCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  )
}

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
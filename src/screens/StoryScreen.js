import React, {useEffect, useState} from 'react';
import { SafeAreaView, 
         ImageBackground,
         StyleSheet, 
         ActivityIndicator,
         TouchableWithoutFeedback, 
         Dimensions,
         Text,
         View,
         TextInput,
        
        } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import storiesData from '../data/stories/';
import ProfilePicture from '../components/ProfilePicture';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const StoryScreen = () => {

  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);
  const [activeStory, setActiveStory] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;

  useEffect(() => {
    const userId = route.params.userId;
    const story = storiesData.find(
      storyData => storyData.user.id === userId
    )
    setUserStories(story);
    setActiveStoryIndex(0);
  }, []);

  useEffect(() => {

    if(!userStories) return;

    if(activeStoryIndex < 0){
      setActiveStoryIndex(0);
      return;
    }

    if(activeStoryIndex >= userStories.stories.length){
      setActiveStoryIndex(userStories.stories.length - 1);
      return;
    }

    setActiveStory(userStories.stories[activeStoryIndex]);
  }, [activeStoryIndex]);

  const navigateToNextUser = () => {
    let newId = (Number(userId) + 1).toString(); 
    navigation.push("Story", { userId: newId });
  }

  const navigateToPrevUser = () => {
    let newId = (Number(userId) - 1).toString(); 
    navigation.push("Story", { userId: newId });
  }

  const handleNextStory = () => {
    if(activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
    }
    setActiveStoryIndex(activeStoryIndex + 1);

  }

  const handlePreviousStory = () => {
    if(activeStoryIndex <= 0){
      navigateToPrevUser();
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  }
  
  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    if(x < screenWidth / 2){
      handlePreviousStory();
    } else {
      handleNextStory();
    }
  }

  if(!activeStory){
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress} >
        <ImageBackground 
            source={{ uri: activeStory.imageUri }}
            style={styles.image} >
              <View style={styles.userInfo}>
                <ProfilePicture 
                uri={userStories.user.imageUri}
                size={50} />
                <Text style={styles.userName}>{userStories.user.name}</Text>
              </View>
              <View style={styles.bottomContainer}>
						    
                <View style={styles.textInputContainer}>
                <Feather 
                    style={styles.cameraButton}
                    name="camera" 
                    size={28} 
                    color="#ffffff" />
                  <TextInput editable placeholder="Send message" 
                  placeholderTextColor={"white"}
                  style={styles.textInput} />
                </View>
                <View style={styles.messageButton}>
                  <Ionicons                     name="paper-plane-outline" 
                  size={28}
                  color="#ffffff" />
                </View>
                
					    </View>
        </ImageBackground >
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  bottomContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 50,
    height: 50,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingTop: 9,
  },
  textInput: {
    height: "100%",
    paddingBottom: 5,
  },
  cameraButton: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  messageButton: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  }
})


export default StoryScreen;


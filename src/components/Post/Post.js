import React from 'react';
import { View } from 'react-native';

import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const Post = ({post}) => (
	<View>
		<Header imageUri={post.user.imageUri} name={post.user.name} />
		<Body imageUri={post.imageUri} />
		<Footer likesCount={post.likesCount}
						caption={post.caption}
						postedAt={post.postedAt} 
		/>
	</View>
);

export default Post;

import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LazyImage from './LazyImage';

const Post = ({ item, shouldLoad }) => {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image source={{ uri: item.author.avatar }} style={styles.avatar}/>
        <Text style={styles.name}>{item.author.name}</Text>
      </View>

      <LazyImage
        shouldLoad={shouldLoad}
        smallSource={{ uri: item.small }}
        source={{ uri: item.image }}
        aspectRatio={item.aspectRatio}
      />

      <View style={styles.description}>
        <Text style={styles.name}>{item.author.name}</Text>
        <Text style={styles.descriptionText}> {item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginTop: 10,
  },

  header: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  description: {
    flexDirection: 'row',
    padding: 15,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },

  name: {
    fontWeight: 'bold',
    color: '#333',
  },

  descriptionText: {
    flex: 1,
    lineHeight: 18,
  }
});

export default Post;

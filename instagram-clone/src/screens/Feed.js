import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, FlatList, Text } from 'react-native'
import Logo from '../assets/instagram.png'
import Post from '../components/Post';

const Feed = () => {
  const [ feed, setFeed ] = useState([]);

  useEffect(() => {
    const loadFeed = async () => {
      const response = await fetch('http://10.0.2.2:3000/feed?_expand=author&_limit=5&page=1');
      const data = await response.json();

      setFeed(data);
    };
    loadFeed();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        renderItem={({ item }) => (
          <Post item={item}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Feed;

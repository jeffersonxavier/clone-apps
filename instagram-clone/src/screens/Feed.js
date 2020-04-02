import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Post from '../components/Post';
import Loading from '../components/Loading';

const Feed = () => {
  const [ feed, setFeed ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);
  const [ loading, setLoading ] = useState(false);
  const [ refreshing, setRefreshing ] = useState(false);
  const [ viewable, setViewable ] = useState([]);

  useEffect(() => {
    loadPage();
  }, [loadPage]);

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (loading || (totalPages && pageNumber > totalPages)) return;

    setLoading(true);

    const pageSize = 5;
    const response = await fetch(
      `http://10.0.2.2:3000/feed?_expand=author&_limit=${pageSize}&_page=${pageNumber}`);
    const data = await response.json();
    const totalItems = response.headers.get('X-Total-Count');


    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(pageNumber + 1);
    setTotalPages(Math.floor(totalItems / pageSize));
    setLoading(false);
  }

  const refreshList = async () => {
    setRefreshing(true);
    await loadPage(1, true);
    setRefreshing(false);
  }

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item}) => item.id));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        renderItem={({ item }) => (
          <Post item={item} shouldLoad={viewable.includes(item.id)}/>
        )}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && <Loading />}
        onRefresh={refreshList}
        refreshing={refreshing}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 20 }}
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

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

// LOCAL IMPORTS
import {StackScreenNavigationProps} from '../../navigation/types/StackTypes';
import {POST_DETAILS} from '../../navigation/StackName/StackName';
import {useHomeScreen} from './utils/useHomeScreen';
import {styles} from './styles/home.styles';
import {PostTypes} from '../../types/types';
interface Props {
  navigation: StackScreenNavigationProps;
}
interface Post {
  item: PostTypes;
}
const HomeScreen = ({navigation}: Props) => {
  const {posts, flatListRef, handleLoadMore, loading, page} = useHomeScreen();
  const renderPost = ({item}: Post) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(POST_DETAILS, {post: item})}>
        <View style={styles.postCard}>
          <Text style={styles.textId}>Id: {item.user_id}</Text>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFooter = () => {
    return page > 1 && loading ? (
      <View style={styles.footerLoader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  if (loading && page === 1) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// LOCAL IMPORTS
import {StackNavigationList} from '../../navigation/types/StackTypes';
import {styles} from './styles/postDetails.styles';
import {usePostDetails} from './utils/usePostDetails';
import {commentTypes} from '../../types/types';

interface Props extends NativeStackScreenProps<StackNavigationList> {}
interface Comment {
  item: commentTypes;
  index: number;
}
const PostDetailsScreen = ({route}: Props) => {
  const post = route.params!.post!;
  const {comments, user} = usePostDetails(post);

  const renderComment = ({item, index}: Comment) => {
    return (
      <View
        style={[
          styles.commentWrapper,
          {marginBottom: index === comments?.length - 1 ? 0 : 20},
        ]}>
        <Text style={styles.commentName}>{item.name}</Text>
        <Text style={styles.commentBody}>{item.body}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.desTextWrapper}>
          <Text style={styles.desText}>Description</Text>
        </View>
        <ScrollView style={styles.scrollViewWrapper}>
          <View style={styles.userWrapper}>
            {user?.name && (
              <Text style={styles.userId}>Author: {user.name}</Text>
            )}
            <Text style={styles.userId}>ID: {post.user_id}</Text>
          </View>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postBody}>{post.body}</Text>
        </ScrollView>
      </View>
      {comments?.length > 0 && (
        <View style={styles.commentWraper}>
          <View style={styles.commentTextWrapper}>
            <Text style={styles.commentText}>Comments</Text>
          </View>
          <View style={styles.flatlistWrapper}>
            <FlatList
              data={comments}
              renderItem={renderComment}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default PostDetailsScreen;

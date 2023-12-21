import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentWrapper: {flex: 0.6, overflow: 'scroll'},
  commentWraper: {flex: 0.4, overflow: 'scroll', marginBottom: 20},
  desTextWrapper: {marginHorizontal: 20, marginTop: 20},
  desText: {fontSize: 20, fontWeight: '500', color: 'gray'},
  scrollViewWrapper: {
    margin: 20,
    padding: 20,
    backgroundColor: 'white',
  },
  userWrapper: {flexDirection: 'row', justifyContent: 'space-between'},
  userId: {fontSize: 10, color: 'gray'},
  postTitle: {fontWeight: 'bold', marginBottom: 20, marginTop: 10},
  postBody: {color: 'gray'},
  commentTextWrapper: {marginHorizontal: 20, marginTop: 0},
  commentText: {fontSize: 20, fontWeight: '500', color: 'gray'},
  flatlistWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: 'white',
    flexGrow: 1,
  },
  commentWrapper: {
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  commentName: {fontWeight: 'bold', marginBottom: 4},
  commentBody: {color: 'gray'},
});

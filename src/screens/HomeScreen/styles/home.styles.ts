import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  postCard: {
    marginTop: 10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textId: {fontWeight: 'bold', marginBottom: 4, color: 'gray'},
  title: {fontWeight: '500'},
  footerLoader: {
    marginTop: 20,
  },
});

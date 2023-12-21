import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HOME, POST_DETAILS} from '../StackName/StackName';
import {PostTypes} from '../../types/types';

export type StackNavigationList = {
  [HOME]: undefined;
  [POST_DETAILS]: PostDetailsParams;
};
export type PostDetailsParams = {
  post: PostTypes;
};
export type StackScreenNavigationProps =
  NativeStackNavigationProp<StackNavigationList>;

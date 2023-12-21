import React, {useEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import PostDetailsScreen from '../../screens/PostDetailsScreen/PostDetailsScreen';
import {HOME, POST_DETAILS} from '../StackName/StackName';
import {StackNavigationList} from '../types/StackTypes';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator<StackNavigationList>();
const Root = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={HomeScreen} />
      <Stack.Screen name={POST_DETAILS} component={PostDetailsScreen} />
    </Stack.Navigator>
  );
};

export default Root;

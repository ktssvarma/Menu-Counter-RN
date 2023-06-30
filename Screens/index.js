import {Platform, Text, View} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './Main';
import List from './List';
import ListView from './ListView';
import { backgroundColor } from '../theme';

const Stack = createNativeStackNavigator();

export class Screens extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 60 : 10,
          backgroundColor: backgroundColor,
        }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen
              name="Main"
              component={Main}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="History"
              component={List}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ListView"
              component={ListView}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default Screens;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, View, useColorScheme} from 'react-native';
import Screens from './Screens';

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={'dark'} />
      <Screens />
    </View>
  );
}

export default App;

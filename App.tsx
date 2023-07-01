import React from 'react';
import { StatusBar, View} from 'react-native';
import Screens from './Screens';
import 'react-native-gesture-handler';
import { backgroundColor } from './theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor={backgroundColor}
        />
        <Screens />
      </View>
  );
}

export default App;

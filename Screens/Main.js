import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {backgroundColor, textColor} from '../theme';
import ItemComponent from '../Components/ItemComponent';

export class Main extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          style={{backgroundColor: '#d2ebf5', height: 60}}
          onPress={() => {
            navigation.navigate('History');
          }}
        />
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
      </View>
    );
  }
}

export default Main;

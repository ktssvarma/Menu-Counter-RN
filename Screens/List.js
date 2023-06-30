import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

export class List extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <TouchableOpacity
          style={{backgroundColor: 'teal', height: 60}}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{color: 'black'}}>List</Text>
      </View>
    );
  }
}

export default List
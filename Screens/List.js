import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { backgroundColor } from '../theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class List extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    try {
      const data = await AsyncStorage.getItem('data');
      this.setState({data: JSON.parse(data)});
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {data} = this.state;
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: backgroundColor, padding: 30}}>
        {data?.map((item, index) => {
          return (
            <View
              style={{
                height: 50,
                flexDirection: 'row',
                borderRadius: 10,
                backgroundColor: item?.color,
                paddingHorizontal: 15,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}
              key={index}>
              <Text
                style={{
                  fontSize: 24,
                  color: backgroundColor,
                  fontWeight: '700',
                }}>
                {item?.name}
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: backgroundColor,
                  fontWeight: '700',
                }}>
                {item?.value}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default List
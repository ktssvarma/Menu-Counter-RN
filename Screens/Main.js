import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {backgroundColor, textColor} from '../theme';
import ItemComponent from '../Components/ItemComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';

export class Main extends Component {
  state = {
    tea: 0,
    coffee: 0,
    milk: 0,
    greenTea: 0,
  };

  async submit() {
    const {tea, coffee, milk, greenTea} = this.state;
    const {navigation} = this.props;
    const data = [
      {name: 'Tea', color: '#EFE0C9', value: tea},
      {name: 'Coffee', color: '#af7f5d', value: coffee},
      {name: 'Milk', color: '#FFF', value: milk},
      {name: 'Green Tea', color: '#b1cba6', value: greenTea},
    ];
    try {
      await AsyncStorage.setItem('data', JSON.stringify(data));
      navigation.navigate('History');
    } catch (error) {
      console.log(error);
    }
    
    
  }
  render() {
    const {navigation} = this.props;

    return (
      <LinearGradient
        colors={[backgroundColor, '#1e437e', '#234e93', '#2759a8', '#5c8cd9']}
        style={{flex: 1}}>
        <ScrollView
          style={{
            paddingHorizontal: 30,
            paddingTop: 20,
          }}>
          <ItemComponent
            name="Tea"
            color="#EFE0C9"
            valueCallback={e => {
              this.setState({tea: e});
            }}
          />
          <ItemComponent
            name="Coffee"
            color="#af7f5d"
            valueCallback={e => {
              this.setState({coffee: e});
            }}
          />
          <ItemComponent
            name="Milk"
            color="#FFF"
            valueCallback={e => {
              this.setState({milk: e});
            }}
          />
          <ItemComponent
            name="Green Tea"
            color="#b1cba6"
            valueCallback={e => {
              this.setState({greenTea: e});
            }}
          />
          <TouchableOpacity
            style={{
              height: 40,
              backgroundColor: '#7EABED',
              borderRadius: 10,
              marginVertical: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              this.submit();
            }}>
            <Text
              style={{color: backgroundColor, fontWeight: '700', fontSize: 20}}>
              Save
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 30,
              borderRadius: 10,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('History');
              }}>
              <Text
                style={{
                  color: textColor,
                  fontWeight: '700',
                  fontSize: 20,
                }}>
                List
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}

export default Main;

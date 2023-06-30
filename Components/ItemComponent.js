import {Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {backgroundColor, textColor} from '../theme';
import Slider from './slider';

export class ItemComponent extends Component {
  state = {count: 0};
  render() {
    const {count} = this.state;
    return (
      <View>
        <View style={{paddingBottom: 10, paddingTop: 20}}>
          <Text
            style={{
              color: textColor,
              fontSize: 24,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Component Name
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: textColor,
              borderRadius: 20,
            }}
            onPress={() => {
              if (count > 0) {
                this.setState({count: count - 1});
              }
            }}>
            <View
              style={{
                width: 25,
                height: 6,
                backgroundColor: backgroundColor,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: textColor, fontSize: 28, fontWeight: '700'}}>
              {count}
            </Text>
          </View>
          <View style={{flex: 10}}>
            <Slider />
            {/* <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                this.setState({count: count + 1});
              }}
            /> */}
          </View>
        </View>
      </View>
    );
  }
}

export default ItemComponent;

import {Text, TouchableOpacity, Vibration, View} from 'react-native';
import React, {Component} from 'react';
import {backgroundColor, textColor} from '../theme';
import Slider from './slider';
import PropTypes from 'prop-types';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

export class ItemComponent extends Component {
  state = {count: 0};
  componentDidUpdate(prevState) {
    const {count}=this.state;
    const {valueCallback} = this.props;
    if(count!==prevState.count){
      Vibration.vibrate(50);
      // valueCallback(count);
    }
  }
  render() {
    const {count} = this.state;
    const {name, color, valueCallback} = this.props;
    return (
      <View>
        <View style={{paddingTop: 20}}>
          <Text
            style={{
              color: color,
              fontSize: 24,
              fontWeight: '600',
              textAlign: 'center',
            }}>
            {name}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: textColor,
              borderRadius: 30,
              marginTop: 10,
            }}
            onPress={() => {
              if (count > 0) {
                valueCallback(count-1);
                this.setState({count: count - 1});
              }
            }}>
            <View
              style={{
                width: 20,
                height: 5,
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
              marginTop: 10,
            }}>
            <Text style={{color: textColor, fontSize: 28, fontWeight: '700'}}>
              {count}
            </Text>
          </View>
          <View style={{flex: 4}}>
            <Slider
              onSubmit={() => {
                valueCallback(count+1);
                this.setState({count: count + 1});
              }}
            />
            {/* <TouchableOpacity
              style={{flex: 1}}
              onPress={() => {
                this.setState({count: count + 1});
              }}
            /> */}
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderStyle: 'dashed',
            borderColor: textColor,
            marginTop: 10,
          }}
        />
      </View>
    );
  }
}

ItemComponent.defaultProps = {
  name: '',
  color: textColor,
  valueCallback:()=>{}
};

ItemComponent.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  valueCallback: PropTypes.func,
};

export default ItemComponent;

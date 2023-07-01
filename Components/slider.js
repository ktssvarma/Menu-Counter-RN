import { Text, View } from 'react-native'
import React, { Component } from 'react'
import SlideButton from 'rn-slide-button';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { backgroundColor } from '../theme';
import PropTypes from 'prop-types';

export class Slider extends Component {
  render() {
    const {onSubmit} = this.props;
    return (
      <GestureHandlerRootView>
        <View style={{flex: 1}}>
          <SlideButton
            height={40}
            containerStyle={{backgroundColor: '#85c8e2'}}
            underlayStyle={{backgroundColor: ''}}
            title="Add"
            titleStyle={{
              color: backgroundColor,
              fontSize: 18,
              fontWeight: '600',
            }}
            autoReset={true}
            autoResetDelay={100}
            completeThreshold={100}
            onSlideEnd={() => {
              onSubmit();
            }}
          />
        </View>
      </GestureHandlerRootView>
    );
  }
}

Slider.defaultProps = {
  onSubmit: () => {},
};

Slider.propTypes={
  onSubmit:PropTypes.func
}

export default Slider
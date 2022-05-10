'use strict';

import React, {Component} from 'react';
import {Image, View, ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import I18n from 'react-native-i18n';

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Splashhhh');
    setTimeout(() => {
      this.props.navigation.replace('HomeScreen');
    }, 2000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#cb1c1c',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          resizeMode={'cover'}
          style={{height: 100, width: 100}}
          source={require('../../assets/images/logo1.png')}
        />
      </View>
    );
  }
}

export default Splash;

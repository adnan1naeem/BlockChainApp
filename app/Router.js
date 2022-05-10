import React, {PureComponent} from 'react';
import {StatusBar, View} from 'react-native';
import Config from '../app/common/Config';
import Device from '../app/common/Device';
// import Styles from '../app/common/Styles';
import {connect} from 'react-redux';
// import {initialApp} from '../app/redux/operations';
import {toast} from './Omni';
import Navigation from '../app/navigation';

export default class Router extends PureComponent {
  componentDidMount() {
    // this.props.initialApp();
  }

  render() {
    return (
      // <View style={Styles.Common.appContainer}>
      <View style={{flex: 1}}>
        <StatusBar hidden={Device.isIphoneX ? false : !Config.showStatusBar} />
        <Navigation />
        {/*<MyToast />*/}
        {/*<MyNetInfoContainer />*/}
      </View>
    );
  }
}

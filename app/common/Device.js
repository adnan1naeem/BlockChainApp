/** @format */

import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const isIphoneX =
  Platform.OS === 'ios' &&
  !Platform.isPad &&
  !Platform.isTVOS &&
  (height === 812 || width === 812);

const Device = {
  isIphoneX,
  ToolbarHeight: isIphoneX ? 35 : 0,
};

export default Device;

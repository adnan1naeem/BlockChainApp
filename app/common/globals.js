const React = require('react-native');
var {AppRegistry, Dimensions} = React;
import memoize from 'lodash.memoize';
import I18n from 'react-native-i18n';

const strings = memoize(
  (key, config) => I18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

const merchant_id = 1;
const businessCatID = 0;

const theme_color = '#00AEEF';
const accent_color = '#FF9523';
const dark_theme_color = '#1E3143';
const facebook_color = '#367FC0';
const gmail_color = '#DD4B39';
const lightgrey = '#E8E8E8';
const lightWhitegrey = 'rgb(239,231,231)';
const grey = 'rgba(186,185,185,0.84)';
const darkgrey = 'rgba(101,99,99,0.84)';
const darkBlackgrey = '#4A4B4D';
const white = '#ffffff';

const GOOGLE_API_KEY = 'AIzaSyAnq1zs88nqRdpeMZ-L5czSm4r7p5mr7Z8';
const coconregularfont = 'Cocon';

const dealNotificationData = '';

const APP_KEY = 'e11f70871718f49e590a';
// const BASE_URL = 'https://dev.shop.my-glu.com'
// const BASE_URL = 'https://alpha.shop.my-glu.com'
const BASE_URL_Main = 'https://myglu.pk/';
const BASE_URL = 'https://myglu.pk/';
const BASE_URL_DEV = 'https://dev.shop.my-glu.com/';
// const BASE_URL = '
// https://myglu.pk/storage/public/admin/flashSaleCover/ZQoBkLI4IQLpYubvS7WtMNqa4t7ksQE9a6HL55JR.jpg
// const BASE_URL = 'http://128.199.142.224:3002/'
const APP_CLUSTER = 'ap1';

exports.theme_color = theme_color;
exports.accent_color = accent_color;
exports.lightgrey = lightgrey;
exports.grey = grey;
exports.dark_theme_color = dark_theme_color;
exports.facebook_color = facebook_color;
exports.gmail_color = gmail_color;
exports.darkgrey = darkgrey;
exports.coconregularfont = coconregularfont;
exports.lightWhitegrey = lightWhitegrey;
exports.darkBlackgrey = darkBlackgrey;
exports.white = white;
exports.merchant_id = merchant_id;
exports.businessCatID = businessCatID;
exports.strings = strings;
exports.GOOGLE_API_KEY = GOOGLE_API_KEY;
exports.APP_KEY = APP_KEY;
exports.APP_CLUSTER = APP_CLUSTER;
exports.BASE_URL = BASE_URL;
exports.BASE_URL_Main = BASE_URL_Main;
exports.BASE_URL_DEV = BASE_URL_DEV;

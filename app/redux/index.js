import {persistCombineReducers, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';

import app from './app';
// import user from './user'
// import product from './products'
// import cart from './cart'

const config = {
  key: 'root',
  storage,
  blacklist: ['app'],
};

const appPersistConfig = {
  key: 'app',
  storage,
  blacklist: ['isOpenSidemenu'],
};
/*
const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['isFetching', 'error'],
}

const productPersistConfig = {
  key: 'product',
  storage,
  blacklist: ['isFetching', 'error'],
}

const cartPersistConfig = {
  key: 'cart',
  storage,
  blacklist: ['isFetching', 'error'],
}*/

export default persistCombineReducers(config, {
  app: persistReducer(appPersistConfig, app),
  // user: persistReducer(userPersistConfig, user),
  // product: persistReducer(productPersistConfig, product),
  // cart: persistReducer(productPersistConfig, cart),
});

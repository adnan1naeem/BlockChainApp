/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {LogBox} from 'react-native';
import {persistStore} from 'redux-persist';
import store from './app/store/configureStore';
import Router from './app/Router';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

class App extends React.Component {
  render() {
    const persistor = persistStore(store);
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: '#00AEEF',
        accent: '#FF9523',
      },
    };
    LogBox.ignoreAllLogs();
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <Router />
        </PaperProvider>
      </Provider>
    );
  }
}

export default App;

// import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from '../containers/screens/SplashScreen';
import {navigationRef} from './NavigationService';
import connect from 'react-redux/lib/connect/connect';
import HomeScreen from '../containers/screens/HomeScreen';
import CreateAccount from '../containers/screens/CreateAccount';
import BusinessDetail from '../containers/screens/BusinessDetail';
import Login from '../containers/screens/LogIn';
import ResetPassword from '../containers/screens/ResetPassword';
import StoreFront from '../containers/screens/StoreFront';
import CreateListing from '../containers/screens/CreateListing';
import CategorySections from '../containers/screens/CategorySections';
import MarketPlace from '../containers/screens/MarketPlace';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class AppStack extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BusinessDetail"
          component={BusinessDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MarketPlace"
          component={MarketPlace}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CategorySections"
          component={CategorySections}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateListing"
          component={CreateListing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="StoreFront"
          component={StoreFront}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

class AppNavigator extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
}

export default AppNavigator;

const styles = StyleSheet.create({
  container: {},
});

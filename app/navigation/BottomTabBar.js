import 'react-native-gesture-handler';
import * as React from 'react';
import {Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MarketPlace from '../containers/screens/MarketPlace';
import Wallet from '../containers/screens/Wallet/Wallet';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'green',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={MarketPlace}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/BottomTab/chat.png')}
              style={{width: 30, height: 30}}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/BottomTab/myAccount.png')}
              style={{
                width: 30,
                height: 30,
              }}
              color={color}
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/BottomTab/chat.png')}
              style={{width: 30, height: 30}}
              color={color}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/images/BottomTab/chat.png')}
              style={{width: 30, height: 30}}
              color={color}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
    // </NavigationContainer>
  );
}
export default BottomTab;

import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MarketPlaceBusiness from '../containers/screens/MarketPlace/MarketPlaceBusiness';
import MarketPlaceListing from '../containers/screens/MarketPlace/MarketPlaceListing';

const Tab = createMaterialTopTabNavigator();

function MarketPlaceTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Listings" component={MarketPlaceListing} />
      <Tab.Screen name="Businesses" component={MarketPlaceBusiness} />
    </Tab.Navigator>
  );
}
export default MarketPlaceTabs;

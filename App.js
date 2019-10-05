import * as React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './Home';
import SelectNews from './SelectNews';
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Sports from './Sports';
import Technology from './Technology';
import Science from './Science';
import Detail from './Detail';

const stack = createStackNavigator({
  home: {
    screen: Home,
  },
  selectNews: {
    screen: SelectNews,
  },
  business: {
    screen: Business,
  },
   entertainment: {
    screen: Entertainment,
  },
  health:{
    screen:Health,
    },
    sports:{
      screen:Sports,
    },
    technology:{
      screen:Technology,
    },
    science:{
      screen:Science,
    },
  detail: {
    screen:Detail,
  },
});

export default createAppContainer(stack);

import {createAppContainer, createTabNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import EmergencyScreen from '../screens/EmergencyScreen';
import MapCustom from '../screens/MapCustom';
import GroundScreen from '../screens/GroundScreen';
import Engine from '../screens/EmergencyPages/Engine';
import ElecA from '../screens/EmergencyPages/ElecA';

const RootStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Emergency: {
    screen: createBottomTabNavigator({
      emergency: createBottomTabNavigator({
        ElecA: {screen: ElecA},
        Elec1: {screen: ElecA},
      }),
      engine: {screen: Engine},
      engine1: {screen: Engine},
      engine2: {screen: Engine},
      engine3: {screen: Engine},
      engine4: {screen: Engine},
      engine5: {screen: Engine},
      engine6: {screen: Engine},
    }),
  },
  Maps: {
    screen: MapCustom,
  },
  Grounds: {
    screen: GroundScreen,
  },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;

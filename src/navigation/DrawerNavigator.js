import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../screens/HomeScreen';
import ColorScreen from '../screens/ColorScreen';
import MapCustom from '../screens/MapCustom';
import GroundScreen from '../screens/GroundScreen';

const RootStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Colors: {
    screen: ColorScreen,
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

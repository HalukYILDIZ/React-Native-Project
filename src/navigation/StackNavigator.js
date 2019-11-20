import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Map from '../screens/MapCustom';
import GroundScreen from '../screens/GroundScreen';
import ColorScreen from '../screens/ColorScreen';

import HomeScreen from '../screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Ground: GroundScreen,
    Maps: Map,
    ColorScreens: ColorScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'SAP',
      headerTintColor: 'red',
      headerPressColorAndroid: 'blue',
    },
  },
);

const AppContainer = createAppContainer(RootStack);
export default AppContainer;

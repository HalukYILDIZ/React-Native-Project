import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import MapCustom from '../screens/MapCustom';

const RootStack = createDrawerNavigator({
  Home: {
    screen: MapCustom,
  },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;

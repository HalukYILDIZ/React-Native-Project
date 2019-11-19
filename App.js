import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Map from './src/screens/Map';
import GroundScreen from './src/screens/GroundScreen';
import ColorScreen from './src/screens/ColorScreen';

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Ana Sayfa</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Ground')}
        />
        <Button
          title="Go to Maps"
          onPress={() => this.props.navigation.navigate('Maps')}
        />
        <Button
          title="Go to Color"
          onPress={() => this.props.navigation.navigate('ColorScreens')}
        />
      </View>
    );
  }
}

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

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

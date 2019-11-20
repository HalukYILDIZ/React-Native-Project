import * as React from 'react';
import {Root} from 'native-base';

//import AppContainer from './src/navigation/StackNavigator';
import AppContainer from './src/navigation/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}

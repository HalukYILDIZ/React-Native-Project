import React from 'react';
import {Button, View, Text, Image, StyleSheet, StatusBar} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'HomeScreen',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../assets/icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <View>
        <StatusBar animated={true} backgroundColor="#16a085" />
        <Text>Ana Sayfa</Text>
        {/* <Buttons
          title="Go to Grounds"
          onPress={() => this.props.navigation.navigate('Ground')}
        />
        <Button
          title="Go to Maps"
          onPress={() => this.props.navigation.navigate('Maps')}
        />
        <Button
          title="Go to Color"
          onPress={() => this.props.navigation.navigate('ColorScreens')}
        /> */}
        <Button
          title="Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;

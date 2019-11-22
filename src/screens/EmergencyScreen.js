import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

class EmergencyScreen extends Component {
  static navigationOptions = {
    title: 'Emergency',
    drawerLabel: 'HomeScreen',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../assets/icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return <View style={styles.a} />;
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default EmergencyScreen;

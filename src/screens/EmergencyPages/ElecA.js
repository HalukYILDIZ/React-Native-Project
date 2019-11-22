import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

class Engine extends Component {
  static navigationOptions = {
    title: 'ElecA',
    drawerLabel: 'HomeScreen',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../../assets/icon.png')}
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

export default Engine;

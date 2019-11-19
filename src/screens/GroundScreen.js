import React from 'react';
//import {createAppContainer} from 'react-navigation';
import {View, Text, StyleSheet, Button, Image,} from 'react-native';

import MapImage from '../components/MapImage';
//import {createDrawerNavigator} from 'react-navigation-drawer';

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Home',
//     drawerIcon: ({tintColor}) => (
//       <Image
//         source={require('../../assets/icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     );
//   }
// }

// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Notifications',
//     drawerIcon: ({tintColor}) => (
//       <Image
//         source={require('../../assets/icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

// const GroundScreen = createAppContainer(MyDrawerNavigator);
const GroundScreen = () => {
  return (
    <View>
      <Text>Grounds Screens</Text>
      <MapImage title="deneme" imageSource={require('../../assets/4228.png')} />
      <MapImage title="deneme" imageSource={require('../../assets/03dr.png')} />
      <MapImage
        title="deneme"
        imageSource={require('../../assets/Harita.png')}
      />
    </View>
  );
};
//const styles = StyleSheet.create({},);
export default GroundScreen;

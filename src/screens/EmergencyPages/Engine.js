import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';

class Engine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      coords: [],
    };
  }
  componentDidMount() {
    Geolocation.getCurrentPosition(
      position => {
        console.log('wokeeey');
        console.log(position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
    );
  }

  static navigationOptions = {
    title: 'Emngine',
    drawerLabel: 'HomeScreen',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../../assets/icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 39.8,
          longitude: 32.8,
          latitudeDelta: 1.5,
          longitudeDelta: 1.5,
        }}>
        {!!this.state.latitude && !!this.state.longitude && (
          <MapView.Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
            title={'Your Location'}
          />
        )}
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Engine;

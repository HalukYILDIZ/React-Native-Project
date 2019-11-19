import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Overlay} from 'react-native-maps';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Example App',
        message: 'Example App access to your location ',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the location');
      //alert('You can use the location');
    } else {
      console.log('location permission denied');
      //alert('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

export default class MapCustom extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Show UserLocation" onPress={requestLocationPermission} />
        <Button title="Show UserLocation" onPress={requestLocationPermission} />
        <View style={styles.container}>
          <Button
            title="Show UserLocation"
            onPress={requestLocationPermission}
          />
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          followsUserLocation={true}
          showsUserLocation={true}
          showsCompass={true}
          showsScale={true}
          showsMyLocationButton={true}
          mapType="satellite"
          style={styles.mapStyle}
          initialRegion={{
            latitude: 39.8,
            longitude: 32.8,
            latitudeDelta: 1.5,
            longitudeDelta: 1.5,
          }}>
          {/* <Overlay
                tappable={true}
                image={require('./assets/4228.png')}
                bounds={[
                 [40.64962,31.36530],// [41.0, 32.0],
                  [38.72337,32.72728]//[37.0, 35.0],
                ]}
              /> */}
          <Overlay
            tappable={true}
            image={require('../../assets/haritatrans.png')}
            bounds={[[40.995, 32.015], [36.995, 35.015]]}
          />
          <Overlay
            tappable={true}
            image={require('../../assets/03drtrans.png')}
            bounds={[
              [40.97713, 31.36124], // [41.0, 32.0],
              [39.26183, 33.7874], //[37.0, 35.0],
            ]}
          />
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerTab: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#718ff2',
    flexDirection: 'row',
    paddingTop: 20,
    borderColor: 'white',
    borderWidth: 2,

    // paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    textDecorationStyle: 'solid',
    fontSize: 64,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 60,
  },
});

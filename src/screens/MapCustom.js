import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PermissionsAndroid,
  Image,
  TouchableOpacity,
} from 'react-native';
import RunInfo from './components/RunInfo';

import MapView, {PROVIDER_GOOGLE, Overlay, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Text,
  Icon,
  ActionSheet,
} from 'native-base';

import haversine from 'haversine';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

var BUTTONS = [
  {text: '03DR SOLID', icon: 'american-football', iconColor: '#2c8ef4'},
  {text: '03DR TRANSPARENT', icon: 'analytics', iconColor: '#f42ced'},
  {text: 'Anatolion Eagle,Trans', icon: 'aperture', iconColor: '#ea943b'},
  {text: 'Anatolion EagleSolid', icon: 'aperture', iconColor: '#ea943b'},
  {text: '4228', icon: 'aperture', iconColor: '#ea943b'},
  {text: 'Delete', icon: 'trash', iconColor: '#fa213b'},
  {text: 'Cancel', icon: 'close', iconColor: '#25de5b'},
];
var DESTRUCTIVE_INDEX = 5;
var CANCEL_INDEX = 6;

async function requestLocationPerrmission() {
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

      // eslint-disable-next-line no-alert
      alert('You can use the location');
    } else {
      console.log('location permission denied');
      // eslint-disable-next-line no-alert
      alert('Location permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}

let id = 0;
export default class MapCustom extends Component {
  static navigationOptions = {
    title: 'Maps',
    drawerLabel: 'MapCustom',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../assets/icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  // async getCamera() {
  //   const camera = await this.map.getCamera();
  //   console.log(camera);
  // }

  // async setCamera() {
  //   const camera = await this.map.getCamera();
  //   // Note that we do not have to pass a full camera object to setCamera().
  //   // Similar to setState(), we can pass only the properties you like to change.
  //   this.map.setCamera({
  //     // heading: camera.heading + 10,
  //     center: {
  //       latitude: this.state.lat,
  //       longitude: this.state.lng,
  //     },
  //   });
  // }

  // async animateCamera() {
  //   const camera = await this.map.getCamera();
  //   camera.heading += 40;
  //   camera.pitch += 10;
  //   camera.altitude += 1000;
  //   camera.zoom -= 1;
  //   camera.center.latitude += 0.5;
  //   this.map.animateCamera(camera, {duration: 2000});
  // }
  constructor(props) {
    super(props);
    // let watchID = Geolocation.watchPosition(position => {
    //   let distance = 0;
    //   if (this.state.previousCoordinate) {
    //     distance =
    //       this.state.distance +
    //       haversine(this.state.previousCoordinate, position.coords, {
    //         unit: 'meter',
    //       });
    //     this.distanceInfo.setState({value: distance});
    //   }
    //   this.speedInfo.setState({value: position.coords.speed});
    //   this.directionInfo.setState({value: position.coords.heading});
    //   this.setState(
    //     {
    //       markers: [
    //         ...this.state.markers,
    //         {
    //           coordinate: position.coords,
    //           key: id++,
    //         },
    //       ],
    //       previousCoordinate: position.coords,
    //       distance,
    //     },
    //     null,
    //     {enableHighAccuracy: true, distanceFilter: 0},
    //   );
    // });

    this.state = {
      mapName: 'No Map Choosen',
      buttonINDEX: 5,
      markers: [],
      // watchID,
      second: 0,
      coordinatesInfo: [],
      altitude: 0,
      heading: 0,
      accuracy: 0,
      toggleHighLow: true,
      lat: 0,
      lng: 0,
    };
  }
  onStart = () => {
    this._interval = setInterval(() => {
      Geolocation.getCurrentPosition(
        position => {
          this.setState({
            heading:
              (Math.atan2(
                position.coords.longitude - this.state.lng,
                position.coords.latitude - this.state.lat,
              ) *
                180) /
              Math.PI,
          });
          this.setState({
            second: this.state.second + 1,
            altitude: Math.round(position.coords.altitude * 3.2808399),
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
            // heading: position.coords.heading,
            coordinatesInfo: [
              ...this.state.coordinatesInfo,
              {coords: position.coords, key: this.state.second},
            ],
          });
          this.map.setCamera({
            center: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              //heading: position.coords.heading,
            },
          });
        },
        null,
        {
          timeout: 20000,
          maximumAge: 1000,
          enableHighAccuracy: this.state.toggleHighLow,
        },
      );
    }, 2000);
  };
  onPause = () => {
    console.log(this.state.coordinatesInfo);
    console.log('----------------------------------------------');
    clearInterval(this._interval);
  };
  onReset = () => {
    this.setState({
      coordinatesInfo: [],
      second: 0,
    });
    clearInterval(this._interval);
  };

  componentWillUnmount() {
    Geolocation.clearWatch(this.state.watchID);
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.toggleDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Image
              source={require('../../assets/logo.png')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 50, height: 50}}
            />
          </Body>
          <Right>
            <Button
              hasText
              //transparent
              onPress={() => requestLocationPerrmission()}>
              <Icon name="navigate" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={styles.container}>
            {/* <Button
              title="Show UserLocation"
              onPress={requestLocationPermission}
            />
            <Button
              title="Show UserLocation"
              onPress={requestLocationPermission}
            /> */}

            <MapView
              provider={PROVIDER_GOOGLE}
              showsUserLocation={true}
              followsUserLocation={true}
              showsCompass={true}
              showsScale={true}
              showsMyLocationButton={true}
              mapType="terrain"
              style={styles.mapStyle}
              initialRegion={{
                latitude: 39.8,
                longitude: 32.8,
                latitudeDelta: 1.5,
                longitudeDelta: 1.5,
              }}
              ref={ref => {
                this.map = ref;
              }}
              initialCamera={{
                center: {
                  latitude: 39.8,
                  longitude: 32.8,
                },
                pitch: 90,
                heading: 360,
                altitude: 1000,
                zoom: 10,
              }}>
              {this.state.buttonINDEX === 4 && (
                <Overlay
                  tappable={true}
                  image={require('../../assets/4228.png')}
                  bounds={[[40.64962, 31.3653], [38.72337, 32.72728]]}
                />
              )}
              {this.state.buttonINDEX === 2 && (
                <Overlay
                  tappable={true}
                  image={require('../../assets/haritatrans.png')}
                  bounds={[[40.995, 32.015], [36.995, 35.015]]}
                />
              )}
              {this.state.buttonINDEX === 1 && (
                <Overlay
                  tappable={true}
                  image={require('../../assets/03drtrans.png')}
                  bounds={[[40.97713, 31.36124], [39.26183, 33.7874]]}
                />
              )}
              {this.state.buttonINDEX === 0 && (
                <Overlay
                  tappable={true}
                  image={require('../../assets/03dr.png')}
                  bounds={[[40.97713, 31.36124], [39.26183, 33.7874]]}
                />
              )}
              {this.state.buttonINDEX === 3 && (
                <Overlay
                  tappable={true}
                  image={require('../../assets/Harita.png')}
                  bounds={[[40.995, 32.015], [36.995, 35.015]]}
                />
              )}
              <Polyline
                coordinates={this.state.coordinatesInfo.map(
                  marker => marker.coords,
                )}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={[
                  '#7F0000',
                  '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                  '#B24112',
                  '#E5845C',
                  '#238C23',
                  '#7F0000',
                ]}
                strokeWidth={6}
              />
            </MapView>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button onPress={() => {}}>
              <Text>altitude</Text>
              <Text>{this.state.altitude} feet</Text>
            </Button>
            <Button
              onPress={() =>
                this.setState({toggleHighLow: !this.state.toggleHighLow})
              }>
              <Text>
                {this.state.toggleHighLow ? 'Accuracy:True' : 'Accuracy:False'}
              </Text>
              <Text>{this.state.accuracy}</Text>
            </Button>
            <Button onPress={() => console.log(this.state.markers)}>
              <Text>{this.state.lat}</Text>
              <Text>{this.state.lng}</Text>
            </Button>
          </FooterTab>
        </Footer>
        <Footer>
          <FooterTab>
            <Button onPress={() => this.onStart()}>
              <Text>Start:{this.state.second}</Text>
            </Button>
            <Button onPress={() => this.onPause()}>
              <Text>Pause</Text>
            </Button>
            <Button onPress={() => this.animateCamera()}>
              <Text>Reset</Text>
            </Button>
          </FooterTab>
        </Footer>    
        <Footer>
          <FooterTab>
            <Button
              full
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: 'Choose a map.',
                  },
                  buttonIndex => {
                    this.setState({clicked: BUTTONS[buttonIndex]});
                    if (buttonIndex === 0) {
                      this.setState({
                        buttonINDEX: 0,
                        mapName: '03 DR SOLID',
                      });
                    } else if (buttonIndex === 1) {
                      this.setState({
                        buttonINDEX: 1,
                        mapName: '03 DR TRANS',
                      });
                    } else if (buttonIndex === 2) {
                      this.setState({
                        buttonINDEX: 2,
                        mapName: 'Anatolian Eagle Trans',
                      });
                    } else if (buttonIndex === 3) {
                      this.setState({
                        buttonINDEX: 3,
                        mapName: 'Anatolian Eagle Solid',
                      });
                    } else if (buttonIndex === 4) {
                      this.setState({
                        buttonINDEX: 4,
                        mapName: '4228',
                      });
                    } else if (buttonIndex === 5) {
                      this.setState({
                        buttonINDEX: 5,
                        mapName: 'No Map Choosen',
                      });
                    }
                  },
                )
              }>
              <Text>{this.state.mapName}</Text>
              <Icon name="menu" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
    height: Dimensions.get('window').height,
  },
  icon: {
    width: 24,
    height: 24,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  button: {
    marginTop: 12,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

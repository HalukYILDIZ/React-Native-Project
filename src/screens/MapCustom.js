import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  PermissionsAndroid,
  Image,
} from 'react-native';

import MapView, {PROVIDER_GOOGLE, Overlay} from 'react-native-maps';
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
var BUTTONS = [
  {text: '03DR SOLID', icon: 'american-football', iconColor: '#2c8ef4'},
  {text: '03DR TRANSPARENT', icon: 'analytics', iconColor: '#f42ced'},
  {text: 'HATALI HARİTA 2', icon: 'aperture', iconColor: '#ea943b'},
  {text: 'Delete', icon: 'trash', iconColor: '#fa213b'},
  {text: 'Cancel', icon: 'close', iconColor: '#25de5b'},
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

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

export default class MapCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapUrl: require('../../assets/03drtrans.png'),
      lat: [40.97713, 31.36124],
      long: [39.26183, 33.7874],
      mapName: '03DRSOLID',
    };
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
              followsUserLocation={true}
              showsUserLocation={true}
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
              }}>
              {/* <Overlay
                tappable={true}
                image={require('../../assets/4228.png')}
                bounds={[
                 [40.64962,31.36530],// [41.0, 32.0],
                  [38.72337,32.72728]//[37.0, 35.0],
                ]}
              /> */}
              {/* <Overlay
            tappable={true}
            image={require('../../assets/haritatrans.png')}
            bounds={[[40.995, 32.015], [36.995, 35.015]]}
          /> */}
              {/* <Overlay
            tappable={true}
            image={require('../../assets/03drtrans.png')}
            bounds={[
              [40.97713, 31.36124],
              [39.26183, 33.7874],
            ]}
          /> */}
              {/* <Overlay
            tappable={true}
            image={require('../../assets/haritatrans.png')}
            bounds={[[40.995, 32.015], [36.995, 35.015]]}
          /> */}

              <Overlay
                image={this.state.mapUrl}
                bounds={[this.state.lat, this.state.long]}
              />
            </MapView>
          </View>
        </Content>
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
                        mapUrl: require('../../assets/03dr.png'),
                        lat: [40.97713, 31.36124],
                        long: [39.26183, 33.7874],
                        mapName: '03DRSOLID',
                      });
                    } else if (buttonIndex === 1) {
                      this.setState({
                        mapUrl: require('../../assets/03drtrans.png'),
                        lat: [40.97713, 31.36124],
                        long: [39.26183, 33.7874],
                        mapName: '03DRTRANSPARENT',
                      });
                    } else if (buttonIndex === 2) {
                      this.setState({
                        mapUrl: require('../../assets/haritatrans.png'),
                        lat: [40.995, 32.015],
                        long: [36.995, 35.015],
                        mapName: 'HATALI HARİTA',
                      });
                    } else if (buttonIndex === 3) {
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
});

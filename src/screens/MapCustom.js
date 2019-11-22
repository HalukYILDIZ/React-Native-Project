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

export default class MapCustom extends Component {
  static navigationOptions = {
    title: 'Maps',
    drawerLabel: 'MapScreen',
    drawerIcon: ({tintColor}) => (
      <Image
        source={require('../../assets/icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      mapName: 'No Map Choosen',
      buttonINDEX: 5,
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
});

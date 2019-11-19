import React from 'react';

import {View, Text} from 'react-native';

import MapImage from '../components/MapImage';

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

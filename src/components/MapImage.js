import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';

const MapImage = ({title, imageSource}) => {
  return (
    <View>
      <Text>Map image{title}</Text>
      <Image source={imageSource} style={styles.imageStyles} />
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyles: {
    width: 150,
    height: 150,
  },
});

export default MapImage;

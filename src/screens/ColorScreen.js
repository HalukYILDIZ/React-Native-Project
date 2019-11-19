import React, {useState} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const ColorScreen = () => {
  const [color, setColor] = useState(0);
  return (
    <View>
      <Button
        title="button"
        onPress={() => {
          setColor(color + 1);
        }}
      />
      <Text> {color}</Text>
    </View>
  );
};
//const styles = StyleSheet.create({});

export default ColorScreen;

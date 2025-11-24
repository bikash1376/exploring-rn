import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Box = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
      <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
      <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
  },
});

export default Box;
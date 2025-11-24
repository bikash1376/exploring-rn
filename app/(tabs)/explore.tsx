import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import * as Device from 'expo-device';

export default function TabTwoScreen() {
  const [deviceInfo, setDeviceInfo] = useState(null);

  useEffect(() => {
    const getDeviceInfo = async () => {
      // const memory = await Device.getTotalMemoryAsync();

      const info = {
        brand: Device.brand,
        manufacturer: Device.manufacturer,
        modelName: Device.modelName,
        osName: Device.osName,
        osVersion: Device.osVersion,
        os: Platform.OS,
        v: Platform.Version,
        // isTV: Platform.isTV,
        // totalMemory: memory,
      };

      setDeviceInfo(info);
    };

    getDeviceInfo();
  }, []);

  if (!deviceInfo) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Information</Text>
      {Object.entries(deviceInfo).map(([key, value]) => (
        <Text key={key} style={styles.text}>
          {key}: {String(value)}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
    // flexDirection: 'column',
    // justifyContent: 'flex-start',
    
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 4,
  },
});

import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const ConferenceMapScreen = ({ route }) => {
  const { location, title } = route.params ?? {};
  const region = {
    latitude: location?.latitude ?? -34.6037,
    longitude: location?.longitude ?? -58.3816,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        {location && <Marker coordinate={location} title={title} />}
      </MapView>
    </View>
  );
};

export default ConferenceMapScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

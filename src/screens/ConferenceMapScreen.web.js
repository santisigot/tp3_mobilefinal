import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ConferenceMapScreen = ({ route }) => {
  const { location, title } = route.params ?? {};

  if (location) {
    const q = `${location.latitude},${location.longitude}`;
    const src = `https://www.google.com/maps?q=${encodeURIComponent(q)}&z=15&output=embed`;
    return (
      <View style={styles.container}>
        <iframe title={title ?? 'map'} src={src} style={{ flex: 1, width: '100%', height: '100%', border: 0 }} />
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.center]}>
      <Text>Mapa no disponible en la web.</Text>
    </View>
  );
};

export default ConferenceMapScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { alignItems: 'center', justifyContent: 'center' },
});

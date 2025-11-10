import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ConferenceDetailScreen = ({ route, navigation }) => {
  const { conference } = route.params ?? {};
  if (!conference) return <View style={styles.empty}><Text>No hay conferencia seleccionada.</Text></View>;

  const imageSource = typeof conference.image === 'number' ? conference.image : { uri: conference.image };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => navigation.navigate('Mapa', { location: conference.location, title: conference.title })}
      >
        <Text style={styles.mapButtonText}>Ver en el mapa</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{conference.title}</Text>
      <Text style={styles.speaker}>Disertante: <Text style={styles.speakerName}>{conference.speaker}</Text></Text>
      <Text style={styles.time}>Hora: {conference.start} - {conference.end}</Text>
      <Text style={styles.description}>{conference.description}</Text>
    </ScrollView>
  );
};

export default ConferenceDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8FAFC',
    height: '100%',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 14,
    marginBottom: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#111827', // very dark
    marginBottom: 8,
  },
  speaker: {
    color: '#374151',
    marginBottom: 4,
    fontWeight: '600',
  },
  speakerName: {
    color: '#0B61FF',
    fontWeight: '700',
  },
  time: {
    color: '#EF7E1A',
    marginBottom: 12,
    fontWeight: '600',
  },
  description: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 10,
    lineHeight: 20,
    color: '#374151',
  },
  mapButton: {
    backgroundColor: '#0B61FF',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  mapButtonText: {
    color: '#fff',
    fontWeight: '700',
  },
});
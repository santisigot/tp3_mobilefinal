import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import imagenCerveza from '../../assets/imagencerveza.jpg';

const ConferenceCard = ({ conference, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.9}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imagenCerveza})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }} />
      <View style={styles.overlay} />
      <View style={styles.info}>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{conference.start} - {conference.end}</Text>
        </View>
        <Text numberOfLines={2} style={styles.title}>{conference.title}</Text>
        <View style={styles.speakerContainer}>
          <Text style={styles.speaker}>{conference.speaker}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ConferenceCard;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: 220,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    zIndex: 1
  },
  info: {
    ...StyleSheet.absoluteFillObject,
    padding: 18,
    justifyContent: 'flex-end',
    zIndex: 2
  },
  timeContainer: {
    backgroundColor: '#EF7E1A',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 8,
  },
  time: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.35)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3
  },
  speakerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  speaker: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6
  },
});
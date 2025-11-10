import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import conferences from '../data/conferences';
import ConferenceCard from '../components/ConferenceCard';

const ConferenceListScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Conferencias</Text>
      <Text style={styles.headerSubtitle}>Festival de Cerveza Artesanal</Text>
    </View>
    <FlatList
      data={conferences}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <ConferenceCard
          conference={item}
          onPress={() => navigation.navigate('Detalle', { conference: item })}
        />
      )}
    />
  </View>
);

export default ConferenceListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC', // Fondo más claro y moderno
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1E293B', // Slate 900
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#64748B', // Slate 500
    fontWeight: '500',
  },
  listContent: {
    paddingVertical: 16,
  },
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmbarcacionesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Embarcaciones</Text>
      <Text>Aquí va el listado de embarcaciones</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 20,
  },
});

export default EmbarcacionesScreen;
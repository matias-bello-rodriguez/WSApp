import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function PrimaryButton({
  title, onPress, loading,
}: { title: string; onPress: () => void; loading?: boolean }) {
  return (
    <TouchableOpacity style={[styles.btn, loading && { opacity: 0.7 }]} onPress={onPress} disabled={loading}>
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: { backgroundColor: '#1e3a8a', paddingVertical: 12, borderRadius: 10, alignItems: 'center' },
  text: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
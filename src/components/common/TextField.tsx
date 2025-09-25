import React from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps } from 'react-native';

type Props = TextInputProps & {
  label: string;
  errorText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function TextField({ label, errorText, leftIcon, rightIcon, style, ...rest }: Props) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputRow}>
        {leftIcon && <View style={styles.icon}>{leftIcon}</View>}
        <TextInput
          placeholderTextColor="#9ca3af"
          style={[styles.input, style]}
          {...rest}
        />
        {rightIcon && <View style={styles.icon}>{rightIcon}</View>}
      </View>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: { marginBottom: 6, color: '#374151' },
  inputRow: {
    borderWidth: 1, borderColor: '#d1d5db', borderRadius: 10,
    paddingHorizontal: 10, paddingVertical: 8,
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: { flex: 1, paddingVertical: 6, color: '#111827' },
  icon: { paddingHorizontal: 6 },
  error: { color: '#dc2626', marginTop: 6, fontSize: 12 },
});
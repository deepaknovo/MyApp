import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function AppButton({
  title,
  onPress,
  disabled = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

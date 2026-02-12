import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function QuickActions() {
  const Action = ({ icon, label }: any) => (
    <TouchableOpacity style={styles.action}>
      <Icon name={icon} size={22} color="#0D47A1" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Action icon="plus-circle" label="Top Up" />
      <Action icon="credit-card" label="Payment" />
      <Action icon="send" label="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 25,
  },
  action: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 16,
    width: '30%',
    elevation: 3,
  },
  label: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: '500',
  },
});

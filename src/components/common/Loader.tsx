import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function Loader() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});

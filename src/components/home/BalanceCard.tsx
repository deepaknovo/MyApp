import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

export default function BalanceCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Current Balance</Text>
      <Text style={styles.amount}>$567.57</Text>

      <View style={styles.row}>
        <View>
          <Text style={styles.smallLabel}>INCOMES</Text>
          <Text style={styles.income}>309</Text>
        </View>

        <View>
          <Text style={styles.smallLabel}>EXPENSES</Text>
          <Text style={styles.expense}>234</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    elevation: 4,
    marginTop: -40,
  },
  label: {
    color: '#6B7280',
    fontSize: 14,
  },
  amount: {
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 8,
    color: Colors.textPrimary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  smallLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  income: {
    fontSize: 16,
    fontWeight: '600',
    color: '#00C853',
  },
  expense: {
    fontSize: 16,
    fontWeight: '600',
    color: '#EF4444',
  },
});

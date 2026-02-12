import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,

} from 'react-native';
import BalanceCard from '../../components/home/BalanceCard';
import QuickActions from '../../components/home/QuickActions';
import { Colors } from '../../theme/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

export default function HomeScreen() {

//   const getHoldings = async () => {
//   const res = await axios.get(
//     "https://api.upstox.com/v2/portfolio/long-term-holdings",
//     {
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     }
//   );

//   console.log(res.data);
// };

   useEffect(() => {
    getHoldings()
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.userName}>Tommy Berns</Text>
        <Text style={styles.location}>Los Angeles</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <BalanceCard />

        <QuickActions />

        {/* Card Preview */}
        <View style={styles.bankCard}>
          <Text style={styles.cardNumber}>
            3567 5543 9080 5600
          </Text>
          <Text style={styles.cardHolder}>Tommy Berns</Text>
        </View>

        {/* Recent Transactions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Recent Transactions
          </Text>

          <View style={styles.transaction}>
            <Text>McDonald's</Text>
            <Text style={styles.expense}>-25.25</Text>
          </View>

          <View style={styles.transaction}>
            <Text>Molly Work</Text>
            <Text style={styles.income}>+1467.00</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    backgroundColor: Colors.primary,
    padding: 20,
    paddingBottom: 60,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  location: {
    color: '#E3F2FD',
    marginTop: 4,
  },
  bankCard: {
    backgroundColor: '#00C853',
    borderRadius: 18,
    padding: 20,
    marginBottom: 30,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 2,
  },
  cardHolder: {
    color: '#FFFFFF',
    marginTop: 10,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
  },
  transaction: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  income: {
    color: '#00C853',
    fontWeight: '600',
  },
  expense: {
    color: '#EF4444',
    fontWeight: '600',
  },
});

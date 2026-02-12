import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppSelector } from '../../store/hooks';
import { Colors } from '../../theme/colors';
import ScreenWrapper from '../../components/layout/ScreenWrapper';

type Props = NativeStackScreenProps<any>;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoggedIn) {
        navigation.replace('App');
      } else {
        navigation.replace('Auth');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [isLoggedIn]);

  return (
    <ScreenWrapper>
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.logoContainer}>
        {/* <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        /> */}
        <Text style={styles.title}>FinBank</Text>
        <Text style={styles.subtitle}>Secure • Fast • Smart</Text>
      </View>
    </LinearGradient>
    </ScreenWrapper>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#E3F2FD',
  },
});

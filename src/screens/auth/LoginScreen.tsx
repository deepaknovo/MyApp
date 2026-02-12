import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '../../store/hooks';
import { loginSuccess } from '../../store/auth/auth.slice';

import { Colors } from '../../theme/colors';
import AuthInput from '../../components/common/AppInput';

export default function LoginScreen({ navigation }: any) {
  const dispatch = useAppDispatch();
  const [isLogin, setIsLogin] = useState(true);

  const translateX = useSharedValue(0);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
    translateX.value = withTiming(isLogin ? 150 : 0, { duration: 300 });
  };

  const animatedToggleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const ValidationSchema = Yup.object().shape({
    phone: Yup.string()
      .min(8, 'Too short')
      .required('Phone is required'),
    password: Yup.string()
      .min(6, 'Minimum 6 characters')
      .required('Password required'),
  });

  const handleSubmit = () => {
    dispatch(loginSuccess('dummy-token'));
    navigation.replace('App'); // navigate to dashboard
  };

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.inner}>
        <Text style={styles.title}>
          Welcome, to sign in continue
        </Text>

        {/* Animated Toggle */}
        <View style={styles.toggleWrapper}>
          <Animated.View style={[styles.activeIndicator, animatedToggleStyle]} />

          <TouchableOpacity style={styles.tab} onPress={toggleAuth}>
            <Text style={styles.tabText}>Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.tab} onPress={toggleAuth}>
            <Text style={styles.tabText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <Formik
          initialValues={{ phone: '', password: '' }}
          // validationSchema={ValidationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <AuthInput
                placeholder="Phone number"
                keyboardType="phone-pad"
                value={values.phone}
                onChangeText={handleChange('phone')}
                error={touched.phone ? errors.phone : ''}
              />

              <AuthInput
                placeholder="Password"
                secure
                value={values.password}
                onChangeText={handleChange('password')}
                error={touched.password ? errors.password : ''}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleSubmit()}
              >
                <Text style={styles.buttonText}>
                  {isLogin ? 'Login' : 'Sign Up'}
                </Text>
              </TouchableOpacity>

              <Text style={styles.forgot}>
                Forgot your password?
              </Text>
            </>
          )}
        </Formik>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inner: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 40,
  },
  toggleWrapper: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 30,
    height: 45,
    marginBottom: 30,
    overflow: 'hidden',
  },
  activeIndicator: {
    position: 'absolute',
    width: '50%',
    height: 45,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    color: '#000',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#00C853',
    height: 50,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  forgot: {
    color: '#E3F2FD',
    textAlign: 'center',
    marginTop: 20,
  },
});

import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../theme/colors';

interface Props {
  placeholder: string;
  secure?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  keyboardType?: any;
}

export default function AuthInput({
  placeholder,
  secure,
  value,
  onChangeText,
  error,
  keyboardType,
}: Props) {
  const [secureText, setSecureText] = useState(secure);

  return (
    <View style={{ marginBottom: 22 }}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#C5CAE9"
          style={styles.input}
          secureTextEntry={secureText}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
        />

        {secure && (
          <TouchableOpacity onPress={() => setSecureText(!secureText)}>
            <Icon
              name={secureText ? 'eye-off' : 'eye'}
              size={20}
              color="#C5CAE9"
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C5CAE9',
  },
  input: {
    flex: 1,
    height: 50,
    color: '#FFFFFF',
    fontSize: 16,
  },
  error: {
    color: '#FFCDD2',
    fontSize: 12,
    marginTop: 4,
  },
});

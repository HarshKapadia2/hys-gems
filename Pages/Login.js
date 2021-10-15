import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ToastAndroid,
} from 'react-native';

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    console.log({ email, password });
    ToastAndroid.show('Success', ToastAndroid.SHORT);
  }
  return (
    <View>
      <Text style={styles.heading}>LOGIN</Text>
      <TextInput
        onChangeText={setEmail}
        style={styles.input}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        name="email"
      />
      <TextInput
        onChangeText={setPassword}
        style={styles.input}
        value={password}
        placeholder="Passwordsd"
        secureTextEntry={true}
        name="password"
      />
      <Button title="Login" onPress={handleSubmit} />
      <Text style={styles.text} onPress={e => navigation.navigate('Signup')}>
        Not a member? Signup
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
  },
});

export default Login;

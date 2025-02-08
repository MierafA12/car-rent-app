import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState, useEffect } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Form = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      Alert.alert('Welcome Back!', `Logged in as ${userData.email}`);
    }
  };

  const handleLogin = async () => {
    const storedUser = await AsyncStorage.getItem('user');
  
    if (!storedUser) {
      Alert.alert('Error', 'No user found. Please sign up first.');
      return;
    }
  
    const userData = JSON.parse(storedUser);
  
    if (email === userData.email && password === userData.password) {
      Alert.alert('Success', `Welcome, ${userData.name}!`);
      
      // Store the logged-in user email
      await AsyncStorage.setItem('loggedInUser', JSON.stringify({ email: userData.email }));
  
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Invalid email or password');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail} 
        keyboardType="email-address" 
        autoCapitalize="none" 
      />

      <Text style={styles.label}>Enter your password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword} 
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
      <Text>Don't have an account? Sign up...</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ECAE36',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

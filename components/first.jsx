import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function IndexPage({ navigation }) {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.car} source={require('../assets/yellow.png')} />
        <View style={styles.all}>
          <Text style={styles.textone}>Rent Your Dream Car</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home1')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  car: {
    width: '100%',
    height:'100vh',
    marginTop: 100,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  all: {
    width: '100%',
    height: 424,
    backgroundColor: '#101820',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  textone: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    backgroundColor: '#ECAE36',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

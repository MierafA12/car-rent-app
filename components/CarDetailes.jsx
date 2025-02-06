import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import Footer from './footer'
import { useNavigation } from '@react-navigation/native';

const CarDetails = ({ route }) => {
     const navigation = useNavigation();
  const { car } = route.params; // Access the car object passed from the Home screen

  return (
    <View style={styles.container}>
    <ScrollView >
      <Image style={styles.image} source={car.image} />
      <View style={styles.details}>
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carPrice}>{car.price}</Text>
        <Text style={styles.carDescription}>{car.description}</Text>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking')}>
                  <Text style={styles.buttonText}>rent now</Text>
                </TouchableOpacity>
                </View>
      
    </ScrollView>
    <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  image: {
    width: '100%',
    height: 250,
  },
  details: {
    padding: 20,
  },
  carName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  carPrice: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  carDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  button:{
    backgroundColor: '#ECAE36',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 40,
    alignItems: 'center',
  }
});

export default CarDetails;
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './footer';

const About = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.header}>About Us</Text>
        <Text style={styles.text}>
          Welcome to our car rental service! We provide a variety of high-quality vehicles 
          at affordable prices, ensuring a smooth and comfortable driving experience. 
          Whether you're looking for a compact car for city driving or a luxury SUV for a road trip, 
          we have the perfect option for you.
        </Text>
        <Text style={styles.text}>
          Our mission is to make car rentals convenient and accessible. With our easy booking process, 
          competitive pricing, and excellent customer support, we strive to meet all your transportation needs.
        </Text>
        <Text style={styles.text}>
          Thank you for choosing us. We look forward to serving you!
        </Text>
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
  content: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ECAE36',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default About;

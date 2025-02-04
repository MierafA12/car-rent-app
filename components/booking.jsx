import React, { useState } from "react";
import {  Text, TextInput, TouchableOpacity, ScrollView, Alert, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Booking = () => {
  const navigation = useNavigation();

  // States for booking
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Function to handle payments
  const handlePayment = (method) => {
    setPaymentMethod(method);

    let paymentURL = "";

    if (method === "Telebirr") {
      paymentURL = "https://telebirr.com/pay";
    } else if (method === "CBE Birr") {
      paymentURL = "https://cbebirr.com/pay"; 
    }

    // Open the payment URL
    Linking.openURL(paymentURL).catch((err) =>
      Alert.alert("Error", "Could not open payment link")
    );
  };

  // Function to confirm booking
  const handleBooking = () => {
    if (!location || !pickupDate || !dropoffDate || !paymentMethod) {
      Alert.alert("Error", "Please fill in all fields and select a payment method.");
      return;
    }
    Alert.alert("Success", "Booking confirmed!");
    navigation.navigate("Confirmation");
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Book Your Car</Text>

      {/* Pickup Location Input */}
      <Text style={{ fontSize: 16, marginBottom: 5 }}>Pickup Location</Text>
      <TextInput
        placeholder="Enter your pickup location"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      {/* Pickup Date */}
      <Text style={{ fontSize: 16, marginBottom: 5 }}>Pickup Date</Text>
      <TextInput
        placeholder="YYYY-MM-DD"
        value={pickupDate}
        onChangeText={setPickupDate}
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Drop-off Date */}
      <Text style={{ fontSize: 16, marginBottom: 5 }}>Drop-off Date</Text>
      <TextInput
        placeholder="YYYY-MM-DD"
        value={dropoffDate}
        onChangeText={setDropoffDate}
        style={styles.input}
        keyboardType="numeric"
      />

      {/* Payment Method */}
      <Text style={{ fontSize: 16, marginBottom: 5 }}>Payment Method</Text>
      <TouchableOpacity
        onPress={() => handlePayment("Telebirr")}
        style={[styles.paymentOption, paymentMethod === "Telebirr" && styles.selectedOption]}
      >
        <Text>📱 Pay with Telebirr</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePayment("CBE Birr")}
        style={[styles.paymentOption, paymentMethod === "CBE Birr" && styles.selectedOption]}
      >
        <Text>🏦 Pay with CBE Birr</Text>
      </TouchableOpacity>

      {/* Confirm Booking Button */}
      <TouchableOpacity onPress={handleBooking} style={styles.confirmButton}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  paymentOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#ECAE36",
  },
  confirmButton: {
    backgroundColor: "#ECAE36",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
};

export default Booking;

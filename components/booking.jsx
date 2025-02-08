import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, ScrollView, Alert, Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Booking = () => {
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [location, setLocation] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = (method) => {
    setPaymentMethod(method);
    let paymentURL = method === "Telebirr" ? "https://telebirr.com/pay" : "https://cbebirr.com/pay";
    Linking.openURL(paymentURL).catch(() => Alert.alert("Error", "Could not open payment link"));
  };

  const handleBooking = async () => {
    if (!location || !pickupDate || !dropoffDate || !paymentMethod) {
      Alert.alert("Error", "Please fill in all fields and select a payment method.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0]; // Get today's date

    const newBooking = { location, pickupDate, dropoffDate, paymentMethod, bookingDate: currentDate };

    try {
      const existingBookings = await AsyncStorage.getItem("bookingHistory");
      const bookings = existingBookings ? JSON.parse(existingBookings) : [];

      bookings.push(newBooking);
      await AsyncStorage.setItem("bookingHistory", JSON.stringify(bookings));

      Alert.alert("Success", "Booking confirmed! Your booking history is updated.");
    } catch (error) {
      Alert.alert("Error", "Could not save booking.");
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>Book Your Car</Text>

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Pickup Location</Text>
      <TextInput placeholder="Enter pickup location" value={location} onChangeText={setLocation} style={styles.input} />

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Pickup Date</Text>
      <TextInput placeholder="YYYY-MM-DD" value={pickupDate} onChangeText={setPickupDate} style={styles.input} keyboardType="numeric" />

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Drop-off Date</Text>
      <TextInput placeholder="YYYY-MM-DD" value={dropoffDate} onChangeText={setDropoffDate} style={styles.input} keyboardType="numeric" />

      <Text style={{ fontSize: 16, marginBottom: 5 }}>Payment Method</Text>
      <TouchableOpacity onPress={() => handlePayment("Telebirr")} style={[styles.paymentOption, paymentMethod === "Telebirr" && styles.selectedOption]}>
        <Text>📱 Pay with Telebirr</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePayment("CBE Birr")} style={[styles.paymentOption, paymentMethod === "CBE Birr" && styles.selectedOption]}>
        <Text>🏦 Pay with CBE Birr</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleBooking} style={styles.confirmButton}>
        <Text style={{ color: "#fff", fontSize: 16 }}>Confirm Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 10 },
  paymentOption: { padding: 10, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 10, alignItems: "center" },
  selectedOption: { backgroundColor: "#ECAE36" },
  confirmButton: { backgroundColor: "#ECAE36", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 10 },
};

export default Booking;

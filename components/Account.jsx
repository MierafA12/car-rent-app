import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Account = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const storedBookings = await AsyncStorage.getItem("bookingHistory");
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      }
    } catch (error) {
      console.log("Error loading booking history:", error);
    }
  };

  const clearBookingHistory = async () => {
    try {
      await AsyncStorage.removeItem("bookingHistory");
      setBookings([]); // Clear state as well
      Alert.alert("Success", "Booking history cleared!");
    } catch (error) {
      Alert.alert("Error", "Could not clear history.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Booking History</Text>
      {bookings.length === 0 ? (
        <Text>No bookings found.</Text>
      ) : (
        bookings.map((booking, index) => (
          <View key={index} style={styles.bookingCard}>
            <Text style={styles.bookingText}>📍 Location: {booking.location}</Text>
            <Text style={styles.bookingText}>📅 Pickup: {booking.pickupDate}</Text>
            <Text style={styles.bookingText}>📅 Drop-off: {booking.dropoffDate}</Text>
            <Text style={styles.bookingText}>💰 Payment: {booking.paymentMethod}</Text>
            <Text style={styles.bookingText}>🗓️ Booked On: {booking.bookingDate}</Text>
          </View>
        ))
      )}
      
      {/* Clear Booking History Button */}
      {bookings.length > 0 && (
        <TouchableOpacity onPress={clearBookingHistory} style={styles.clearButton}>
          <Text style={{ color: "#fff", fontSize: 16 }}>Clear History</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  bookingCard: { padding: 15, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 10 },
  bookingText: { fontSize: 16 },
  clearButton: { backgroundColor: "red", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 10 },
});

export default Account;

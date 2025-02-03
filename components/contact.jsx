import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    Alert.alert("Success", "Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>Have questions? Reach out to us, and we’ll get back to you soon!</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Your Name" 
          value={formData.name} 
          onChangeText={(value) => handleChange("name", value)}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Your Email" 
          value={formData.email} 
          onChangeText={(value) => handleChange("email", value)}
          keyboardType="email-address"
        />
        <TextInput 
          style={[styles.input, styles.textArea]} 
          placeholder="Your Message" 
          value={formData.message} 
          onChangeText={(value) => handleChange("message", value)}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
        <Text style={styles.locationTitle}> Our Location:</Text>
        <Text style={styles.locationText}>car rent campany, Ethiopia</Text>
        <Text style={styles.locationText}>tel- 251+676767676</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    maxWidth: 400,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#ECAE36",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  textArea: {
    height: 80,
  },
  button: {
    backgroundColor: "#ECAE36",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  locationText: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
  },
});

export default ContactPage;

import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Alert } from 'react-native';
import Footer from './footer';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { FavoritesContext } from './FavoriteContext';

const cars = [
  {
    id: 1,
    name: 'Toyota Corolla',
    description: 'A reliable and fuel-efficient sedan perfect for city driving.',
    price: '50birr/day',
    image: require('../assets/car22.jpeg'),
  },
  {
    id: 2,
    name: 'Honda Civic',
    description: 'A stylish and comfortable car with great mileage.',
    price: '55birr/day',
    image: require('../assets/cccc.png'),
  },
  {
    id: 3,
    name: 'Ford Mustang',
    description: 'A powerful sports car for an exhilarating driving experience.',
    price: '100birr/day',
    image: require('../assets/th.jpg'),
  },
];

const Home = () => {
  const navigation = useNavigation();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter cars by name only
  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search car"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Icon style={styles.searchIcon} name="search" />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.contentText}>Most Popular</Text>
        {filteredCars.map((car) => ( // Use filteredCars instead of cars
          <View key={car.id} style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('CarDetails', { car })}>
              <Image style={styles.image} source={car.image} />
            </TouchableOpacity>
            <View style={styles.carInfo}>
              <Text style={styles.carName}>{car.name}</Text>
              <Text style={styles.carPrice}>{car.price}</Text>
            </View>

            <TouchableOpacity
  onPress={() => {
    toggleFavorite(car);
    Alert.alert("Favorite Updated", `${car.name} has been ${favorites.some(fav => fav.id === car.id) ? "removed from" : "added to"} favorites.`);
  }}
  style={styles.favoriteButton}
>
  <Icon name={favorites.some(fav => fav.id === car.id) ? 'heart' : 'heart-outline'} style={styles.favoriteIcon} />
</TouchableOpacity>

          </View>
        ))}
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
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  button2: {
    padding: 10,
  },
  home: {
    color: 'white',
  },
  searchContainer: {
    margin: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  searchIcon: {
    fontSize: 40,
    color: '#ECAE36',
    marginLeft: 10,
  },
  input: {
    height: 40,
    width: 350,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  contentText: {
    fontSize: 18,
    color: '#ECAE36',
    marginBottom: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  carInfo: {
    padding: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  carPrice: {
    fontSize: 14,
    color: '#555',
  },
  favoriteButton: {
    position: 'absolute',
    top: 170,
    right: 10,
  },
  favoriteIcon: {
    fontSize: 25,
    color: 'red',
  },
});

export default Home;
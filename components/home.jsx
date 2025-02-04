import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput, Alert, Modal } from 'react-native';
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
  const [menuVisible, setMenuVisible] = useState(false);

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Icon name="menu" style={styles.menuIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Car Rentals</Text>
      </View>

      <Modal visible={menuVisible} animationType="slide" transparent>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setMenuVisible(false)}>
            <Icon name="close" style={styles.closeIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.menuText}>setting</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('About')}>
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.menuText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </Modal>

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
        {filteredCars.map((car) => (
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ECAE36',
  },
  menuIcon: {
    fontSize: 30,
    color: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 20,
  },
  searchContainer: {
    margin: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    fontSize: 30,
    color: '#ECAE36',
    marginLeft: 10,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
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
  menuContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 250,
    backgroundColor: '#fff',
    padding: 20,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeIcon: {
    fontSize: 30,
    color: '#333',
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Home;

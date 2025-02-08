import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, Image, Modal } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const cars = [
    {
        id: 1,
        name: 'Toyota Corolla',
        description: 'A reliable and fuel-efficient sedan perfect for city driving.',
        price: '500birr/day',
        image: require('../assets/car22.jpeg'),
      },
      {
        id: 2,
        name: 'Honda Civic',
        description: 'A stylish and comfortable car with great mileage.',
        price: '557birr/day',
        image: require('../assets/cccc.png'),
      },
      {
        id: 3,
        name: 'Ford Mustang',
        description: 'A powerful sports car for an exhilarating driving experience.',
        price: '1000birr/day',
        image: require('../assets/th.jpg'),
      },
      {
        id: 4,
        name: 'Vitz',
        description: 'A reliable and fuel.',
        price: '800birr/day',
        image: require('../assets/gg.jpg'),
      },
];

const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [menuVisible, setMenuVisible] = useState(false);

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Icon name="arrow-back" style={styles.backIcon} />
                  
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Icon name="menu" style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
      
      <Modal visible={menuVisible} animationType="slide" transparent>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setMenuVisible(false)}>
            <Icon name="close" style={styles.closeIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('About')}>
            <Text style={styles.menuText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.menuText}>Contact</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      
      <TextInput
        style={styles.input}
        placeholder="Search car"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      
      <ScrollView style={styles.content}>
        {filteredCars.map((car) => (
          <TouchableOpacity  style={styles.card}>
            <Image style={styles.image} source={car.image} />
            <Text style={styles.carName}>{car.name}</Text>
            <Text style={styles.carPrice}>{car.price}</Text>
            
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Form')}>
        <Text style={styles.loginText}>Login to Rent</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#003049',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  backIcon: {
    fontSize: 30,
    color: 'white',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  menuIcon: {
    fontSize: 30,
    color: 'white',
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    marginTop: 20,
  },
  content: {
    flex: 1,
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  carPrice: {
    fontSize: 14,
    color: '#555',
  },
  loginButton: {
    backgroundColor: '#ECAE36',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;

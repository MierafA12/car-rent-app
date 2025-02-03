import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { FavoritesContext } from './FavoriteContext';

const Favorite = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>My Favorites</Text>
      <ScrollView>
        {favorites.length > 0 ? (
          favorites.map((car) => (
            <View key={car.id} style={styles.card}>
              <Image style={styles.image} source={car.image} />
              <View style={styles.carInfo}>
                <Text style={styles.carName}>{car.name}</Text>
                <Text style={styles.carPrice}>{car.price}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noFavoritesText}>No favorite cars yet.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F8F8F8',
  },
  topic: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    color: '#ECAE36',
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
  noFavoritesText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});

export default Favorite;

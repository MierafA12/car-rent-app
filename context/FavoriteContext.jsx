import React, { createContext, useState } from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (car) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorited = prevFavorites.some(fav => fav.id === car.id);
      
      if (isAlreadyFavorited) {
        return prevFavorites.filter(fav => fav.id !== car.id); // Remove from favorites
      } else {
        return [...prevFavorites, car]; // Add full car object to favorites
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

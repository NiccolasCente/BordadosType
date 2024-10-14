import React, { createContext, useContext, useEffect, useState } from 'react';

interface FavoriteItem {
  id: string;
  title: string;
}

interface FavoritesContextType {
  favoriteItems: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>(() => {
    const storedItems = localStorage.getItem('favoriteItems');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavoriteItems((prevItems) => [...prevItems, item]);
  };

  const removeFromFavorites = (id: string) => {
    setFavoriteItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

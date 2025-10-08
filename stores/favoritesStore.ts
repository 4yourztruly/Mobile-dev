import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FavoritesState {
    favorites: string[],
    addFavorite: (item: string) => void,
    removeFavorite: (item: string) => void
    isCelcius: boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      isCelcius: false,

      isPreferenceCelcius: (preference: boolean) => 
        set({isCelcius: preference}),

      addFavorite: (item) =>
        set((state) => ({
          favorites: [...state.favorites, item],
        })),

      removeFavorite: (item) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== item),
        })),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
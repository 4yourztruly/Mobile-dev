import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface FavoritesState {
    favorites: string[],
    addFavorite: (city: string) => void,
    removeFavorite: (city: string) => void
    togglePreference: () => void,
    isFavorite: (city: string) => boolean
    isCelcius: boolean;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      isCelcius: false,

      togglePreference: () => 
        set((state) => ( {isCelcius: !state.isCelcius}
        )),

      addFavorite: (city) =>
        set((state) => ({
          favorites: [...state.favorites, city.trim().toLowerCase()],
        })),

      isFavorite: (city) =>
        get().favorites.includes(city.trim().toLowerCase()),

      removeFavorite: (city) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== city.trim().toLowerCase()),
        })),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
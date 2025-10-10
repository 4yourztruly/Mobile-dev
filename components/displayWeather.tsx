import { getWeather } from '@/api/api';
import { useFavoritesStore } from '@/stores/favoritesStore';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSearchParams } from 'expo-router/build/hooks';
import { useEffect, useState } from "react";
import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function DisplayWeather() {
    const favorites = useFavoritesStore(state => state.favorites);
    const isCelcius = useFavoritesStore(state => state.isCelcius);
    const addFavorite = useFavoritesStore(state => state.addFavorite);
    const isFavorite = useFavoritesStore(state => state.isFavorite);
    const removeFavorite = useFavoritesStore(state => state.removeFavorite);
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
     
    const params = useSearchParams();
    const urlCity = params.get('city')
    console.log(urlCity);

    useEffect(() => {
        if(!urlCity) return;

        handleSubmit(urlCity);
    }, [urlCity]);
    
    const handleSubmit = async (city: string) => {
        if (!city.trim()) return setError("Please enter a city name")

        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const data = await getWeather(city);
            if (typeof data === "string") {
                setError('city not found');
            } else {
                setWeather(data);
                setCity('');
                console.log(data)
            }
        }
        catch (err) {
            setError("Error fetching weather");
        } finally {
            setLoading(false);
        }
    }

    function getWeatherIcon(weatherType: string) {
        switch (weatherType) {
            case "Clear":
                return "sunny";
            case "Clouds":
                return "cloud";
            case "Rain":
                return "water-drop";
            case "Thunderstorm":
                return "water-drop";
            default:
                return "sunny";
        }
    }

    function getWeatherColor(weatherType: string) {
        switch (weatherType) {
            case "Clear":
                return "yellow";
            case "Clouds":
                return "white";
            case "Rain":
                return "blue";
            case "Thunderstorm":
                return "blue";
            default:
                return "sunny";
        }
    }

    const handleFavoriteToggle = () => {
        if (!weather?.city) return;
        const cityName = weather.city.trim().toLowerCase();
        if (isFavorite(cityName)) {
            removeFavorite(cityName);
        } else {
            addFavorite(cityName);
        }
    };

    const currentIsFavorite = weather?.city && isFavorite(weather.city);

    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
        }}>

            {weather && (
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <View><MaterialIcons name={currentIsFavorite ? 'star' : 'star-outline'} color={currentIsFavorite? 'yellow' : 'white'} size={28} style={{ paddingLeft: 220, }} onPress={handleFavoriteToggle}></MaterialIcons>
                    </View>
                    <MaterialIcons name={getWeatherIcon(weather.weatherType)} size={250} color={getWeatherColor(weather.weatherType)} ></MaterialIcons>
                    <Text style={styles.text}>{`${weather.city}`}</Text>
                    <Text style={styles.text}>{`${weather.weatherType} and temparature is ${isCelcius ? weather.tempC : weather.tempF} ${isCelcius ? 'C' : 'F'}`}</Text>
                    <Text style={styles.text}>{`${weather.description}`}</Text>

                </View>
            )}

            <Text style={{
                color: 'red',
                paddingBottom: 10,
                fontSize: 20,
            }}>{error}</Text>

            <TextInput value={city} onChangeText={setCity} style={{
                color: 'white',
                height: 40,
                borderWidth: 1,
                borderColor: 'white',
                textAlign: 'center',
                width: '80%',
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
            }} placeholder='Enter name of a city here'></TextInput>
            <Button title='Submit' onPress={() => handleSubmit(city)}></Button>
            <Pressable><Text style={styles.text}>GPS</Text></Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        paddingBottom: 10,
        fontSize: 20,

    }
})
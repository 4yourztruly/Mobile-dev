import { useFavoritesStore } from "@/stores/favoritesStore";
import { Button, Text, View } from "react-native";

export default function Settings() {
    const isCelcius = useFavoritesStore(state => state.isCelcius);
    const togglePreference = useFavoritesStore(state => state.togglePreference);
    return (
    <View style={{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: 'black',
    }}>
        <Text style={{color:'white',fontSize:30,}}>Settings</Text>
        <Button title={`Toggle ${isCelcius? 'Celcius': 'Farenheit'}`} onPress={togglePreference}></Button>
    </View>
)
}
import { useFavoritesStore } from "@/stores/favoritesStore";
import { Button, Text, View } from "react-native";

export default function SettingsBody() {
    const isCelcius = useFavoritesStore(state => state.isCelcius);
    const togglePreference = useFavoritesStore(state => state.togglePreference);
    return (
    <View style={{
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1,
    }}>
        <Text style={{ color: 'white', fontSize: 30, paddingBottom:40,}}>{`You are using ${isCelcius ? 'Celcius' : 'Farenheit'}`}</Text>
        <Button title={`Toggle ${isCelcius ? 'Farenheit' : 'Celcius'}`} onPress={togglePreference}></Button>
    </View>)
}
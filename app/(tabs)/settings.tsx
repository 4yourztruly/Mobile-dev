import SettingsBody from "@/components/settingsBody";
import { Text, View } from "react-native";

export default function Settings() {
    
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: 'black',
            height: '100%',
            paddingBottom:70,
        }}>
            <Text style={{ color: 'white', fontSize: 30, paddingTop:70, }}>Settings</Text>
            <SettingsBody></SettingsBody>
        </View>
    )
}
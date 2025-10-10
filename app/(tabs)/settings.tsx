import SettingsBody from "@/components/settingsBody";
import { ScrollView, Text, View } from "react-native";

export default function Settings() {

    return (
        <ScrollView style={{
            flex: 1,
        }} contentContainerStyle={{ flexGrow: 1, }}>
            <View style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'black',
                height: '100%',
                paddingBottom: 70,
            }}>
                <Text style={{ color: 'white', fontSize: 30, paddingTop: 70, }}>Settings</Text>
                <SettingsBody></SettingsBody>
            </View>
        </ScrollView>
    )
}
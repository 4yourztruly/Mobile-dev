import DisplayFavorites from "@/components/displayFavorites";
import { Text, View } from "react-native";

export default function Favorites() {
    return (
    <View style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingTop:70,
        height:'100%',
    }}>
        <Text style={{
            color:'white',
            fontSize:30,
        }}>Favorites</Text>
        <DisplayFavorites>

        </DisplayFavorites>
    </View>
    )
}
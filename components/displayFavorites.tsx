import { useFavoritesStore } from "@/stores/favoritesStore";
import { useRouter } from "expo-router";
import { Button, Pressable, ScrollView, Text, View } from "react-native";

export default function DisplayFavorites() {
    const {favorites, removeFavorite} = useFavoritesStore((state) => state);
    const router = useRouter();
    
    return (
    <ScrollView style={{
        flex:1,
        width:'100%',
    }} contentContainerStyle={{
        flexGrow:1,
        alignItems:'center',
        }}>
    <View style={{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        paddingTop:50,
        width:'60%',
        alignItems:'center',
    }}>
            {favorites.length === 0 ? (
                <Text style={{color:'white',}}>No favorites yet!</Text>
            ) : (
                 favorites.map((item,index) => (
                <View key={index} style={{
                    borderWidth:1,
                    borderColor:'white',
                    padding:25,
                    borderRadius:15,
                    marginBottom:20,
                }}>
                    <Pressable onPress={() => router.push({pathname: '/', params: {city: `${item}`}})}>
                        <Text style={{
                        color:'white',
                        fontSize:20,
                        paddingBottom: 10,
                    }}>
                        {item}
                    </Text>
                    </Pressable>
                <Button title='Delete' onPress={() => removeFavorite(item)}></Button>
                </View>
            ))
            )}
    </View>
    </ScrollView>
    )
    
}
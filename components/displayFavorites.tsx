import { useFavoritesStore } from "@/stores/favoritesStore";
import { Button, ScrollView, Text, View } from "react-native";

export default function DisplayFavorites() {
    const {favorites, removeFavorite} = useFavoritesStore((state) => state);

    return (<View style={{
        height:'100%',
        display:'flex',
        flexDirection:'column',
        paddingTop:50,
    }}>
        <ScrollView>
            {favorites.length === 0 ? (
                <Text style={{color:'white',}}>No favorites yet!</Text>
            ) : (
                 favorites.map((item,index) => (
                <View key={index}>
                    <Text>
                        {item}
                    </Text>
                <Button title='Delete' onPress={() => removeFavorite(item)}></Button>
                </View>
            ))
            )}
           
        </ScrollView>
    </View>)
}
import DisplayWeather from "@/components/displayWeather";
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
  <ScrollView>
  <View style={{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    paddingTop:70,
    height:'100%',
  }}>
      <Text style={{
        color:'white',
        fontSize:30,
        paddingBottom:50,
      }}>Weather Checker</Text>
      <DisplayWeather>

      </DisplayWeather>
  </View>
  </ScrollView>
)
}


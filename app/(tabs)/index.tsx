import DisplayWeather from "@/components/displayWeather";
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
  <KeyboardAvoidingView style={{flex:1,}} behavior={Platform.OS === 'ios' ? 'padding': 'height'}>
  <ScrollView style={{
  }} contentContainerStyle = {{
    flexDirection:'column',
    justifyContent:'center',
  }} keyboardShouldPersistTaps ="handled">
  <View style={{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    paddingTop:70,
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
  </KeyboardAvoidingView>
)
}


import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";

export default function App() {

  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickednumber){
    setUserNumber(pickednumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber){
    screen  = <GameScreen/>
  }
  return (
    <LinearGradient colors={[ Colors.primary500, Colors.accent700]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.imageBackground}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>      
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ddb52f",
  },
  imageBackground:{
    opacity: 0.4
  }
});

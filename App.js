import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {useFonts} from 'expo-font'
// import AppLoading from "expo-app-loading";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from './screens/GameOverScreen'
import Colors from "./constants/colors";

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // const [fontsLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  // });

  // if(!fontsLoaded){
  //   return <AppLoading/>;
  // }
  function pickedNumberHandler(pickednumber){
    setUserNumber(pickednumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if(userNumber){
    screen  = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if(gameIsOver && userNumber){
    screen  = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
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

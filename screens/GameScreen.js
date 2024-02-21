import { useState } from "react";
import { Text, View, StyleSheet, Alert, Button } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  //exclude parametar just to make sure that we dont guess the users input number rightaway
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  //Math.random() generates a random number between 0 and 1 +min is for we dont get 0 generated as a guess
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(minBoundry,maxBoundry,userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(userDirection) {// direction => 'lower, 'higher'
    console.log(userDirection);
    if ((userDirection === 'lower' && currentGuess < userNumber) || (userDirection === 'higher' && currentGuess > userNumber)){
      Alert.alert("Dont Lie!!!", "You Know This Is Not The Right Guess!!!", [{text: 'Sorry!', style: 'cancel'}])
      return;
    }
    if (userDirection === 'lower') {
      maxBoundry = currentGuess;
    console.log(maxBoundry, 'maxBoundry');
      // const newRandomNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    } else {
      //+1 bcz if it was right the user would've won and so the user wouldnt guess the same minBoundry again
      minBoundry = currentGuess + 1;
    console.log(minBoundry, 'minBoundry');
      // const newRandomNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    }
    const newRandomNumber = generateRandomBetween(minBoundry,maxBoundry,currentGuess);
    setCurrentGuess(newRandomNumber);
    console.log(newRandomNumber, 'newRandomNumber');

  }
  return (
    <View style={styles.screen}>
      <Title>User's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Heigher Or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton> 
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
        </View>

        {/* <Button title="-" onPress={nextGuessHandler.bind(this, 'lower')}/>
          <Button title="+" onPress={nextGuessHandler.bind(this, 'higher')}/> */}
      </View>
      {/* <View>LOG ROUND</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 44,
  },
});
export default GameScreen;

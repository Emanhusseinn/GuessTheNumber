import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text , FlatList} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

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

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  //the useState is an array bcs we're holding the number that was guessed the for every round, the initialGuess is the initial value
  const [guessRounds, setGuessRounds] = useState([initialGuess]);


  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
    // whenever these between the array changes the onGameOver(); is gonna re-execute and check if the game is over
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
     minBoundry = 1;
     maxBoundry = 100;
    
  }, []);

  function nextGuessHandler(userDirection) {
    // direction => 'lower, 'higher'
    if (
      (userDirection === "lower" && currentGuess < userNumber) ||
      (userDirection === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont Lie!!!", "You Know This Is Not The Right Guess!!!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (userDirection === "lower") {
      maxBoundry = currentGuess;
      // const newRandomNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    } else {
      //+1 bcz if it was right the user would've won and so the user wouldnt guess the same minBoundry again
      minBoundry = currentGuess + 1;
      // const newRandomNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    }
    const newRandomNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds(prevGuessRounds => [newRandomNumber, ...prevGuessRounds]);
  }

  const guessRoundListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Title>User's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Heigher Or Lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.eachButtonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.eachButtonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList
            data={guessRounds}                                       //but index starts with 0!!!!!
            renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item} />}
            keyExtractor={(item)=> item}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 44,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  eachButtonContainer: {
    flex: 1,
  },
  instructionText: {
    marginBottom: 12,
  },
  listContainer: {
    flex: 1,
    padding: 16
  },
});
export default GameScreen;

import { useState } from "react";
import { TextInput, Button, Text, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }
  function confirmInputHandler() {
    //converting the string number to a number
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View  style={styles.rootContainer}>
      <Title> Guess My Number</Title>
      <Card>
        <InstructionText>Enter A Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.PrimaryButtons}>
          <View style={styles.eachButtonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.eachButtonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  instructionText:{
    color: Colors.accent700,
    fontSize: 30
  },
  PrimaryButtons: {
    flexDirection: "row",
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent700,
    borderBottomWidth: 2,
    color: Colors.accent700,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  eachButtonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;

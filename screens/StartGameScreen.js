import { useState } from "react";
import { TextInput, Button, Text, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber('');
  }
  function confirmInputHandler() {
    //converting the string number to a number
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
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
          <PrimaryButton onPresed={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    // flex: 1,
    padding: 16,
    marginTop: 100,
    backgroundColor: Colors.primary500,
    marginHorizontal: 24,
    borderRadius: 8,
    //android shadow
    elevation: 10,
    //ios shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
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

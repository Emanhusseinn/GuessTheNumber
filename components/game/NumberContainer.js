import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";


function NumberContainer({children}) {
//   const initialGuess = generateRandomBetween(1,100, userNumber)
//   const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
borderWidth: 4,
borderColor: Colors.accent700,
padding: 24,
borderRadius: 10,
margin: 24,
alignItems: 'center',
 justifyContent: 'center'

  },
  numberText: {
    color: Colors.accent700,
    fontSize: 44,
    fontWeight: 'bold'
  },
});
export default NumberContainer;

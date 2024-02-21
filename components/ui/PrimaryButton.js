import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
//   function pressHandler() {
//     // console.log("Presseddddd!");
//     onPress();
//   }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#91627a" }}
        style={({pressData}) => pressData ? [styles.buttonContainer, styles.pressed ]: styles.buttonContainer}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor:  Colors.primary600,

    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  //IOS ripple
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;

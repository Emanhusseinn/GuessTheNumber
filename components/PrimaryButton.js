import { Text, View, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Presseddddd!");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
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
    backgroundColor: "#663f53",

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

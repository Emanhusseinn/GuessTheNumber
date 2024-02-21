import { StyleSheet, Text } from "react-native";

function GameOverScreen(){
    return(
<Text>Game Is Over!</Text>
    )
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
export default GameOverScreen;

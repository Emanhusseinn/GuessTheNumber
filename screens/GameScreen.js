// import { useState } from "react";
import {Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
       <Title>User's Guess</Title>
        {/* GUESS */}
        <View>
            <Text>Heigher Or Lower?</Text>
            {/* + - */}
        </View>
        {/* <View>LOG ROUND</View> */}
    </View>
  );
}

const styles = StyleSheet.create({
screen:{
    flex: 1,
    padding: 44,
},

});
export default GameScreen;

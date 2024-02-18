import {TextInput, Button, Text, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
return( 
<View style={styles.inputContainer}>
    <TextInput/>
   <PrimaryButton>Reset</PrimaryButton>
   <PrimaryButton>Confirm</PrimaryButton>
</View>)

};

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#46162e',
        marginHorizontal: 24,
        borderRadius: 8,
        //android shadow
        elevation: 10,
        //ios shadow
        shadowColor: 'black',
        shadowOffset:{width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.5
    },
  });
export default StartGameScreen;
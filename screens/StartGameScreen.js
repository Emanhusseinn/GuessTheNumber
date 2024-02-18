import {TextInput, Button, Text, View, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen(){
return( 
<View style={styles.inputContainer}>
    <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
   <PrimaryButton>Reset</PrimaryButton>
   <PrimaryButton>Confirm</PrimaryButton>
</View>)

};

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        padding: 16,
        marginTop: 100,
        backgroundColor: '#482b3a',
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
    numberInput: {
        height: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center'

    }
  });
export default StartGameScreen;
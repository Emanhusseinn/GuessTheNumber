import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
  
}

const styles = StyleSheet.create({
  title:{
    fontSize: 38,
    fontWeight: 'bold',
    color: Colors.accent700,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: Colors.accent700,
    padding: 12 
}
});

export default Title;

import { Text, View, StyleSheet, Pressable } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>
  
}

const styles = StyleSheet.create({
  title:{
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12 
}
});

export default Title;

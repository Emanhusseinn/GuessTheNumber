import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({ roundNumber, guess }) {
  return (
    <View  style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>User's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
borderColor: Colors.primary600,
borderWidth: 1,
borderRadius: 40,
padding: 12,
marginVertical: 8,
backgroundColor: Colors.accent700,
flexDirection: 'row',
justifyContent: 'space-between',
width:'100*',
elevation: 4,
  },
  itemText:{
    fontWeight: 'bold',
  }
});

export default GuessLogItem;

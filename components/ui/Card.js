import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return(
<View style={styles.card}>{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "space-between",
        alignItems: "center",
        // flex: 1,
        padding: 16,
        marginTop: 40,
        backgroundColor: Colors.primary500,
        marginHorizontal: 24,
        borderRadius: 8,
        //android shadow
        elevation: 10,
        //ios shadow
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
      },
  });
export default Card;

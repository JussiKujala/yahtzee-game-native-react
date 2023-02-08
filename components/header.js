import { React } from "react";
import { Text, View } from "react-native";
import styles from "../styles/style.js";

export default Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>
                Dices game
            </Text>
        </View>
    )
}
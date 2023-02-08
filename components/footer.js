import { React } from "react";
import { Text, View } from "react-native";
import styles from "../styles/style.js";

export default Footer = () => {
    return(
        <View style={styles.footer}>
            <Text style={styles.author}>
                Author: Jussi Kujala
            </Text>
        </View>
    )
}
import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        backgroundColor: '#fafafc',
        borderRadius: 8,
        color: 'black',
        fontFamily: theme.fonts.text400,
        fontSize: 20,
        marginHorizontal: 10,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#e8eef9',
        textShadowColor: 'black'
    },
})
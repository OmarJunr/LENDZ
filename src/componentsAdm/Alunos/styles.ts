import { StyleSheet, Platform } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 15,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        marginHorizontal: 10,
        borderRadius: 10,
        backgroundColor: theme.colors.sombra,
        alignItems: 'center',
    },
    image: {
        width: '80%',
        height: '80%',
        backgroundColor: theme.colors.sombra,
        borderRadius: 50,
    },
    containerImage: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        marginLeft: 10
    },
    text: {
        fontSize: 18,
        fontFamily: theme.fonts.poppinsMedium
    }
})
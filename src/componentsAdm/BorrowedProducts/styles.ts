import { StyleSheet, Platform } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        marginBottom: 20,

    },
    imageContainer: {
        flex: 4,
        backgroundColor: theme.colors.sombra,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '98%',
        height: '98%',
    },
    infos: {
        flex: 5,
        justifyContent: "center",
        marginLeft: 10,
    },
    select: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },

    title: {
        fontFamily: theme.fonts.poppinsMedium,
        fontSize: 20
    },
    solicitado: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.selected
    },
    text: {
        fontFamily: theme.fonts.poppinsMedium,
        fontSize: 15,
        color: theme.colors.selected
    },
})
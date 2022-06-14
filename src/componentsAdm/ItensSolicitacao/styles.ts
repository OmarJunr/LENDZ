import { StyleSheet, Platform } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        flexDirection: 'row',
        borderColor: 'black',
        marginTop: 10,

    },
    image: {
        flex: 4,
        backgroundColor: theme.colors.sombra
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
    check: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    title: {
        fontFamily: theme.fonts.text500,
        fontSize:18
    },
    solicitado: {
        fontFamily: theme.fonts.text400,
        fontSize:13,
        color:theme.colors.selected
    },
    aluno: {
        fontFamily: theme.fonts.text400,
        fontSize:13,
        color:theme.colors.selected
    }
})
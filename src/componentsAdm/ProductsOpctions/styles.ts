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
    imageContainer: {
        width: "40%",
        height: "90%",
        marginLeft: 20
    },
    image: {
        flex: 1,
        backgroundColor: theme.colors.sombra
    },
    infos: {
        marginTop: 10,
        flex: 1,
        marginLeft: 10,

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
        fontSize: 18
    },
    solicitado: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.selected
    },
    aluno: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.selected
    },
    refitContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:10,
        marginTop:10
    }
 
})
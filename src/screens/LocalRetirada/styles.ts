import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafc'
    },
    header: {
        width: "100%",

        marginHorizontal: 16,
        flexDirection: "row",
        marginTop: 20,
    },
    local_retirada_text: {
        color: "#85858B",
        fontSize: 16,
        fontFamily: theme.fonts.text500,
    },
    middle_container: {
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 16,
        height: 480,
        marginTop: 50,
    },
    title: {
        fontSize: 16,
        color: "#000000",
    },
    subtitle: {
        fontSize: 12,
        color: "#85858B"
    },
    image: {
        height: 370,
        width: 370,

    },
    bottom_container: {
        alignItems: 'center',
        width: "100%",
        marginTop: 20
    },
    voltar: {
        width: '100%',
        height: 56,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 15
    },
    voltar_text: {
        fontSize: 18,
        color: "#FFFFFF",
        marginLeft: 10,
        fontFamily: theme.fonts.title700
    },
    voltar_button: {
        fontSize: 18,
        color: "#FFFFFF",
        marginLeft: 40,
        alignSelf: "center",
    },
    number: {
        color: '#000',
        fontSize: 30,
        fontFamily: theme.fonts.title700,
        marginVertical: 5
    },
    voltarText: {
        color: '#61A5C2',
        fontSize: 18,
        fontWeight: 'bold'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    mapContainer: {

        width: '100%',
        height: '80%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
})
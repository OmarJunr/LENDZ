import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        width: '100%',
        height: '90%',
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 10,
    },
    subContainer: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 30
    },

    cabecalho: {
        alignItems: "center",
        flexDirection: 'row',
        marginBottom: 40,
    },
    arrowleft: {
        marginTop: Platform.OS === 'android' ? 50 : 35,
        marginLeft: 20
    },
    title: {
        fontFamily: theme.fonts.poppinsBold,
        color: 'white',
        fontSize: 30,
        marginLeft: 10
    },

    FlatList: {
        marginVertical: 10
    }
})
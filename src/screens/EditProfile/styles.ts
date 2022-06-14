import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cabecalho: {
        width: '100%',
        height: '15%',
        marginTop: getStatusBarHeight(),
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    title: {
        color: theme.colors.black,
        textAlign: 'center',
        fontSize: 25,
        fontFamily: theme.fonts.title700,
        marginHorizontal: 80,
    },
    screen: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width: '100%',
        height: '90%',
        backgroundColor: "white",
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: theme.colors.secondary,
        width: '80%',
        height: 50,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 25,

    },
    textButton: {
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        position: 'absolute'
    },
    linear: {
        width: '100%',
        height: 50,
        opacity: 0.5,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 25
    }
});

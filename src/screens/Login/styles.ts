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
        marginLeft: 20,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 100,
    },
    form: {
        height: '100%',
        width: '100%',
        paddingTop: 50,
        paddingBottom: 50,
        marginTop: '30%',
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    password: {
        textAlign: 'center',
        height: 56,
        flexDirection: 'row',
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        fontFamily: theme.fonts.title700,
    },
    TitleBox: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 30,
    },
});

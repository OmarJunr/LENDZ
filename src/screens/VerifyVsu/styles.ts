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
        marginTop: 150,
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        position: 'relative',

    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: '#246796',
        textAlign: 'center',
        marginHorizontal: 30
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
        marginBottom: 30
    },
    scroll: {
        bottom: -30
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        marginBottom:20
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});

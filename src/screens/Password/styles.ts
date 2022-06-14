import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cabecalho: {
        marginTop: getStatusBarHeight() + 10,
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
        width: '100%',
        height: Dimensions.get('window').height * 0.5,
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
    },
    separation: {
        flex: 1
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
        textAlign: 'center',
        marginHorizontal: 30
    },
    password: {
        textAlign: 'center',
        height: 56,

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
        marginVertical: 15
    },
});

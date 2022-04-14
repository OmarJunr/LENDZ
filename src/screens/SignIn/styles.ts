import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    image: {
        width: '30%',
        height: 110,

    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        fontFamily: theme.fonts.title700,
        marginTop: 15,

    },
    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 120
    },
    scroll: {
        position: 'relative',
        bottom: -13
    },
    buttonEntry:{
        width: '70%',
        height: 56,
        borderRadius: 30,
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleButton:{
        flex: 1,
        color: theme.colors.primary,
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: 'center'
    }


});
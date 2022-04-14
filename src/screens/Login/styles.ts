import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    form: {
        width: '100%',
        alignItems: 'center',
        bottom: 20,
        marginTop: -10
    },
    label: {
        marginTop: 25,
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: '#246796',
    },
    labelPass: {
        marginTop: 25,
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: '#246796',
        bottom: 50
    },
    teste:{
        width: '70%',
        height: 56,
        borderRadius: 30,
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        alignItems: 'center'
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

});
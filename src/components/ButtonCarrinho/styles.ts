import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 60,
        borderRadius: 30,
        marginVertical: 30,
        backgroundColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',

    },

    espacamento: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 25,
    },

    vazio: {
        color: 'grey',
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: '35%',
    },

    title: {
        flex: 1,
        color: theme.colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: theme.fonts.title700,
        textAlign: 'center'
    }

});
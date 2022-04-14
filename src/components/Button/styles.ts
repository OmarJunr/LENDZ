import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:40,
        marginBottom:40
    },
    title: {
        flex: 1,
        color: theme.colors.white,
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: 'center'
    }

});
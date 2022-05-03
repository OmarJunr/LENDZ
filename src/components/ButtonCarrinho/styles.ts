import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 56,
        borderRadius: 30,
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: theme.colors.primary,
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: 'center'
    }

});
import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 56,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: theme.colors.white,
        fontSize: 15,
        fontFamily: theme.fonts.title700,
        textAlign: 'center'
    }
});
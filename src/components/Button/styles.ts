import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 56,
        backgroundColor: theme.colors.secondary,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:40,
        marginBottom:40,
        justifyContent: "center",
        
    },
    title: {
        flex: 1,
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
        position: 'absolute'
    },
    linear: {
        width: '100%',
        height: 56,
        opacity: 0.5,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius:30
    }

});
import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
       backgroundColor: theme.colors.secondary,
       marginTop:35,
       borderRadius:30,
       alignItems:"center",
       justifyContent:"center"
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
        height: '100%',
        opacity: 0.5,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius:30,
        
    }
})
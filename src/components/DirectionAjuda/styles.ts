import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
       width:'80%',
       height:30,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems:'center',
        marginVertical:5,
    },
    titles:{
        marginLeft:20,
        color:theme.colors.white
    }
})
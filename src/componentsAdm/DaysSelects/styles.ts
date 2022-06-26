import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        width: '78%',
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonDay: {
        width:35,
        height:35,
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    containerButtonDay: {
        width: 35,
        height: 35,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    selectDay: {
        flexDirection: "row",
        alignItems: 'center'
    },
    textDay: {
        fontFamily: theme.fonts.poppinsMedium,
        fontSize: 18
    },
    textQtdDays: {
        fontFamily: theme.fonts.poppinsBold,
        fontSize: 16,
        marginRight: 5
    }
})
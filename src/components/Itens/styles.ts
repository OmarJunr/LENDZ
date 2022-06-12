import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 40,
        alignItems: 'center',
        marginVertical: 30
    },
    buttonCheck: {
        alignItems:'center',
        justifyContent:"center",
        backgroundColor: '#5F93B1',
        width:50,
        height:50,
        borderRadius:15,
    },
    buttonChecked: {
        alignItems:'center',
        justifyContent:"center",
        backgroundColor: '#1F5371',
        width:50,
        height:50,
        borderRadius:15,
    }
})
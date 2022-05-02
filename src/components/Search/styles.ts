import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    search: {
        width: '70%',
        backgroundColor: '#e7e7e7',
        padding: 8,

        marginRight: 10,
        borderRadius: 4,
        opacity: 1,
        flexDirection: 'row',
    },
    filter: {
        padding: 8,
        borderRadius: 4,
        opacity: 1,
        justifyContent: 'center',
        backgroundColor: '#e7e7e7',
    }

})
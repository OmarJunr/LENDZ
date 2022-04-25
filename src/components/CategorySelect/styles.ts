import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        minHeight: 160,
        maxHeight: 195,
        paddingLeft: 24,
        marginTop: 10
    },
    interno: {
        width: 160,
        height: 190,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
        backgroundColor: 'white',
        borderColor: '#fbfbfb',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.23,
        elevation: 2,
    },
    content: {
        width: 120,
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#e8e8e8',
        marginTop: 10,
    },
    title: {
        color: 'black',
        fontSize: 13,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        justifyContent: "center",
    },
    status: {
        flexDirection: "row",
        alignItems: 'center',
    },
    cart: {
        backgroundColor: '#e8e8e8',
        padding: 6,
        borderRadius: 20,
        marginLeft: 8,
    }
});
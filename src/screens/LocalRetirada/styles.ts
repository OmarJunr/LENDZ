import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "15%",
        marginHorizontal: 16,
        flexDirection: "row"
    },
    local_retirada_text: {
        color: "#8B98B4",
        fontSize: 18
    },
    middle_container: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 70
    },
    title: {
        fontSize: 16,
        alignSelf: "center",
        width: "100%",
        color: "#000000",
        marginBottom: 24
    },
    subtitle: {
        fontSize: 12,
        color: "#85858B"
    },
    image: {
        height: 370,
        width: "100%",
        marginHorizontal: 4,
        marginTop: 16
    },
    bottom_container: {
        alignContent: "center",
        position: "absolute",
        width: "100%",
        bottom: 0
    },    
    voltar: {
        borderRadius: 75,
        height: 58,
        flex: 4,
        marginEnd: 16,
        marginStart: 12,
        backgroundColor: "#468FAF",
        flexDirection: "row"
    },   
    voltar_text: {
        fontSize: 16,
        color: "#FFFFFF",
        marginEnd: 32,
        marginRight: 32,
        position: "absolute",
        right: 0,
        alignSelf: "center"
    },
    voltar_button: {
        fontSize: 18,
        color: "#FFFFFF",
        position: "absolute",
        left: 0,
        alignSelf: "center",
        marginStart: 32,
        marginLeft: 32
    }
})
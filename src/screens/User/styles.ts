import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: "#2A6F97"
    },
    header: {
        width: "100%",
        marginHorizontal: 16,
        flexDirection: "row",
        marginTop: 16
    },
    my_account: {
        fontSize: 18,
        color: "#FFFFFF",
        marginLeft: 20,
        alignSelf: "center"
    },
    info_container: {
        marginTop: 64,
        width: "100%",
        alignItems: "center",
        marginBottom: 64
    },
    photo: {
        height: 110,
        width: 110,
        borderRadius: 110,
        backgroundColor: "#FFFFFF"
    },
    user_name: {
        fontSize: 23,
        fontWeight: "bold",
        marginTop: 18,
        color: "#FFFFFF"
    },
    email: {
        fontSize: 17,
        color: "#FFFFFF",
        opacity: 0.8
    },
    menu_container: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        position: "absolute",
        bottom: 0
    },
    menu_item: {
        backgroundColor: "#FBFBFB",
        width: "80%",
        marginHorizontal: 40,
        flexDirection: "row"
    },
    menu_icon: {
        fontSize: 20,
        margin: 24,
        alignSelf: "center"
    },
    menu_text: {
        fontSize: 16,
        alignSelf: "center",
        color: "#000000"
    }
})
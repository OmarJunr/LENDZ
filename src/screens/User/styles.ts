import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width: '100%',
        height: '90%',
    },
    header: {
        width: "100%",
        marginTop: 16,
        justifyContent: "center"
    },
    my_account: {
        fontSize: 18,
        color: "#FFFFFF",
        alignSelf: "center"
    },
    info_container: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
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
        borderRadius: 30,
    },
    menu_item: {
        backgroundColor: "#FBFBFB",
        marginHorizontal: 40,
        flexDirection: "row",
        marginVertical: 8,
        borderRadius: 10,
        elevation:1
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
    },
    info: {
        justifyContent: 'center',
        alignItems: "center",
    },
    buttonEdit: {
        width: 300,
        height: 40,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 50,
        marginTop: 20,
        elevation:5
    },
    textEdit: {
        fontFamily: theme.fonts.text500,
        color: '#206495'
    }
})
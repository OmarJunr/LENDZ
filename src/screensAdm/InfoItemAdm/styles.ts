import { StyleSheet } from "react-native"
import { ThemeContext } from "react-navigation"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {

        flex: 1,
    },
    screen: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width: '100%',
        height: '90%',
        backgroundColor: "#FFFFFF",
    },
    product_info_container: {
        flexDirection: "row",
        marginLeft: 16,
        marginRight: 16,
        marginTop: 12,
        marginBottom: 8
    },
    name: {
        color: "#000000",
        fontSize: 23,
        fontWeight: "bold",
        flex: 2
    },
    empty_block: {
        flex: 1
    },
    available: {
        color: "#014F86",
        position: "absolute",
        fontSize: 21,
        fontWeight: "bold",
        right: 0
    },
    unavailable: {
        color: "#E50404",
        position: "absolute",
        fontSize: 21,
        fontWeight: "bold",
        right: 0
    },
    image: {
        width: "80%",
        height: "33%",
        alignSelf: "center",
        resizeMode: "contain"
    },
    available_products: {
        fontSize: 20,

        marginLeft: 16,
        fontFamily: theme.fonts.poppinsMedium,
        color: theme.colors.text
    },
    bottom_view: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    header: {
        width: "100%",
        height: "15%",
        marginLeft: 20,
        marginTop: 10
    },
    qntd_button_container: {
        borderRadius: 75,
        height: 58,
        flex: 2,
        marginStart: 16,
        marginEnd: 12,
        backgroundColor: "#468FAF",
        flexDirection: "row"
    },
    devolvido: {
        borderRadius: 75,
        height: 58,
        flex: 3,
        marginEnd: 16,
        marginStart: 12,
        backgroundColor: "#468FAF",
        flexDirection: "row"
    },
    button_container: {
        flexDirection: "row",
        marginTop: 16,
        marginBottom: 16
    },
    inc_button: {
        height: "100%",
        width: 20,
        marginEnd: 16,
        position: "absolute",
        right: 0,
        justifyContent: "center"
    },
    dec_button: {
        height: "100%",
        width: 20,
        marginStart: 16,
        justifyContent: "center"
    },
    button_icon: {
        fontSize: 18,
        color: "#FFFFFF"
    },
    qtd_text: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        width: "100%",
        alignSelf: "center",
        position: "absolute",
        color: "#FFFFFF"
    },
    add_text: {
        fontSize: 16,
        color: "#FFFFFF",
        marginStart: 32,
        alignSelf: "center",
        fontFamily: theme.fonts.poppinsBold
    },
    shop_button: {
        fontSize: 25,
        color: "#FFFFFF",
        position: "absolute",
        right: 0,
        alignSelf: "center",
        marginRight: 32,
        marginEnd: 32
    },
    info_container: {
        width: '100%',
        height: '20%',
        marginTop: 20,
    },
    containerTitle: {
        alignItems: 'center',
    },
    textTitle: {
        fontFamily: theme.fonts.poppinsMedium,
        fontSize: 20
    },
    textDesc: {
        marginHorizontal: 20,
        marginTop: 10,
        fontFamily: theme.fonts.poppinsLight,
        fontSize: 15,
        color: theme.colors.highlight
    }

})
import { StyleSheet } from "react-native"
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
        fontWeight: "bold",
        marginLeft: 16
    },
    bottom_view: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    header: {
        width: "100%",
        height: "15%",
        marginHorizontal: 16
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
    add_button: {
        borderRadius: 75,
        height: 58,
        flex: 4,
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
        alignSelf: "center"
    },
    shop_button: {
        fontSize: 18,
        color: "#FFFFFF",
        position: "absolute",
        right: 0,
        alignSelf: "center",
        marginRight: 32,
        marginEnd: 32
    },
    info_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20
    },
    bar: {
        backgroundColor: '#e9e7e7',
        width: "90%",
        height: 1,
        marginHorizontal: 20,
        marginTop: 10,
        opacity: 0.4
    },
    barEnable: {
        backgroundColor: theme.colors.secondary,
        position: "absolute",
        bottom: -12,
        width: "100%",
        height: 3,
    },
    barDisable: {
        position: "absolute",
        bottom: -12,
        width: "100%",
        height: 3,
    },
    titleInfo: {
        color: theme.colors.black,
    },
    titleInfoEnable: {
        color: theme.colors.secondary,
    },
    textInfo: {
        marginLeft: 20,
        marginTop: 10
    }
})
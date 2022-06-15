import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        width: '100%',
        height: '90%',
    },
    input: {
        height: 50,
        width: '80%',
        marginBottom: 40,
        backgroundColor: '#fafafc',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        borderColor: '#a8a8a8',
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 50,
        marginLeft: '10%'
    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 10,
    },
    textCabecalho: {

        marginLeft: 10
    },
    subContainer: {
        backgroundColor: "white",
        flex: 1,
        borderRadius: 30
    },
    imageContainerSup: {
        width: 50,
        height: 50,
        borderRadius:500,
        flexDirection: "row",
        shadowColor: "#000",
        elevation: 16,
    },
    imageSup: {
        width: "100%",
        height: '100%',
        borderRadius:500,
    },
    perfilSup: {
        flexDirection: "row",
        marginTop: 40,
        marginLeft: '10%',
        marginBottom: 20
    },
    scrollView: {
        marginHorizontal: 20,
        marginLeft: '10%',
        width: '80%',
        height: 400,
    },
    iconsCategory: {
        marginRight: 10,
        flexDirection: 'row'
    },
    icons: {
        marginLeft: 10
    },
    cabecalho: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    arrowleft: {
        marginTop: Platform.OS === 'android' ? 50 : 35,
        marginLeft: 20
    },
    title: {
        fontFamily: theme.fonts.poppinsBold,
        color: 'white',
        fontSize: 25
    },
    subtitle: {
        color: 'white',
        fontFamily: theme.fonts.poppinsLight,
        fontSize: 18
    },
    nameSup: {
        fontFamily: theme.fonts.text500,
        fontSize: 14
    },
    timeSup: {
        fontFamily: theme.fonts.text100,
        fontSize: 15
    },
    infoSup: {
        marginLeft: 10
    },
    recebido: {
        width: '70%',
        paddingVertical: 10,
        backgroundColor: '#fafafc',
        borderColor: '#a8a8a8',
        borderWidth: 1,
        borderTopEndRadius: 18,
        borderBottomEndRadius: 18,
        borderBottomStartRadius: 18,
        borderTopLeftRadius: 7,
        marginTop: 10
    },
    textConversa: {
        fontFamily: theme.fonts.poppinsMedium,
        marginHorizontal: 10
    },
    textResposta: {
        fontFamily: theme.fonts.poppinsMedium,
        marginHorizontal: 10,
        color: 'white'
    },
    enviado: {
        marginTop: 10,
        marginLeft: '30%',
        width: '70%',
        maxWidth: '90%',
        paddingVertical: 10,
        backgroundColor: '#2C7DA0',
        borderWidth: 1,
        borderTopStartRadius: 18,
        borderBottomEndRadius: 18,
        borderBottomStartRadius: 18,
        borderTopEndRadius: 7
    }
})
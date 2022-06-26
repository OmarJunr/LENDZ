import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    screen: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        width: '100%',
        height: '90%',
        backgroundColor: "white",
        alignItems: 'center'
    },
    cabecalho: {
        width: '100%',
        height: '15%',
        marginTop: getStatusBarHeight(),
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    selectDropDown: {
        shadowOpacity: 0,
        shadowRadius: 0,
        borderRadius: 14,
        borderWidth: 1,
        backgroundColor: '#fafafc',
        borderColor: '#eff3',
        marginTop: -34
    },
    selectTextButton: {
        backgroundColor: '#fafafc',
        color: theme.colors.black,
        fontFamily: theme.fonts.poppinsMedium,
        fontSize: 16,
        textAlign: 'left',
        marginHorizontal: 24,
    },
    selectTextRow: {
        textAlign: 'left',
        marginHorizontal: 24,
        color: theme.colors.black,
        fontFamily: theme.fonts.poppinsMedium,
        fontSize: 16,
    },
    selectButton: {
        paddingHorizontal: 0,
        marginHorizontal: 32,
        width: '80%',
        marginTop: 10,
        borderRadius: 14,
        borderWidth: 1,
        elevation: 4,
        borderColor: '#eff3',
        backgroundColor: '#fafafc',
        color: theme.colors.black
    },
    icon: {
        marginRight: 24,
    },
    containerForm: {
        width: '82%',
        height: '100%',
        alignItems: 'center'
    },
    linear: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 30,
    },
    button: {
        marginTop: -20,
        width: '75%',
        height: 50,
        backgroundColor: theme.colors.secondary,
        marginBottom: 10,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "grey",
        textAlign: 'center',
        fontSize: 20,
        fontFamily: theme.fonts.poppinsMedium,
        marginLeft: 50,

    },
    textButton: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: theme.fonts.poppinsMedium,
        flex: 1,
        position: 'absolute'
    },
    qntdContainer: {
        borderRadius: 10,
        width: '80%',
        height: 50,
        alignItems: "center",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    qtdButton: {
        borderRadius: 10,
        width: '40%',
        height: 50,
        borderColor: '#eff3',
        elevation: 4,
        backgroundColor: '#fafafc',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    textQtd: {
        fontFamily: theme.fonts.poppinsMedium,
        fontSize: 18
    },
    textQtdTotal: {
        fontFamily: theme.fonts.poppinsMedium,
        fontSize: 18
    },
    buttonIcon: {
        fontSize: 18,
        color: "#000"
    },
    decButton: {
        marginHorizontal: 12,
    },
    containerDay: {
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

});

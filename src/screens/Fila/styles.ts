import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Background } from '../../components/Background';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",

    },

    imageContainer: {
        width: 150,
        height: 120,
        backgroundColor: '#F2F2F2',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 5,
        marginHorizontal: 20,
        marginVertical: 20,

    },

    image:{
        width: 120,
        height: 80,
    },

    itemInfo:{
        marginVertical: 40,
        marginTop: -110,
        marginLeft: "50%",
        flexDirection: 'column',
        alignItems: 'flex-start',

    },

    font:{
        fontSize: 16,
        color: theme.colors.black,
    },

    qtdButtons:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 120,
    },

    quantity:{
        marginHorizontal: 7,
        color: theme.colors.black,
        fontSize: 20,
    },

    cabecalho: {
        width: '100%',
        height: '15%',
        marginTop: getStatusBarHeight(),
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',

    },

    disponivel: {
        color: "grey",
        fontSize: 15,
    },

    title: {
        color: "grey",
        textAlign: 'center',
        fontSize: 25,
        fontFamily: theme.fonts.title700,
        marginHorizontal: 40,
        marginTop: -50,

    },

    rodape: {
        marginVertical: 300,
        flexDirection: 'column',
        alignItems: 'center',
        
    },

    textRodape: {
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        fontSize: 20,
        color: "grey",
    },

    textRodapeQtd:{
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 30,

    },
});

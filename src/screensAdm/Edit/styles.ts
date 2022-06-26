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
    title: {
        color: "grey",
        textAlign: 'center',
        fontSize: 25,
        fontFamily: theme.fonts.title700,
        marginLeft: 50,
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
        elevation:4,
        borderColor: '#eff3',
        backgroundColor: '#fafafc',
        color: theme.colors.black
    },
    icon: {
        marginRight: 24,
    },
    containerForm:{
        width:'82%',
        height:'100%',
        alignItems: 'center'
    },

});

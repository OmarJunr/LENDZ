import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        width: '100%',
        height: '15%',
        marginTop: getStatusBarHeight(),
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',

    },
    image: {
        width: 100,
        height: 100,
        marginLeft: 100,
    },
    form: {
flex:1,
        height: '100%',
        marginTop: 10,
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center'
    },
    label: {
        marginTop: 25,
        marginBottom: 25,
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: '#246796'
    },
    scroll:{
       position:'relative',
       bottom:-13
    }

});
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
        flex: 1,
        height: '100%',
        marginTop: 20,
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
        color: '#246796',
        textAlign: 'center',
        marginHorizontal: 20
    },
    scroll: {
        bottom:-20
    },
    TitleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical:10
    },
});
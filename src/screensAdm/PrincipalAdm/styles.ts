import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    screen: {
        width: '100%',
        height: '90%',
        backgroundColor: '#f6f6f6',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems:"center"
    },
    TitleBox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.title700,
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 20
    },
    seeAll: {
        marginHorizontal: 15,
        color: '#014F86'
    }
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FDFDFD'
    },
    itens: {
        alignItems: 'center',
    },
    title: {
        color: '#000000',
        fontSize: 25,
        marginBottom: 40,
        fontWeight: 'bold'
    },
    subTitle: {
        color: '#8B98B4',
        fontSize: 18,
    },
    voltar: {
        width: '100%',
        height: 56,
        borderRadius: 30,
        alignItems: 'center',
        marginVertical: 15
    },
    local: {
        width: 230,
        height: 80,
        backgroundColor: theme.colors.primary,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 40,
        justifyContent: 'center'
    },
    localText: {
        color: "white",
        fontSize: 15,
        fontWeight: 'bold'
    },
    voltarText: {
        color: '#61A5C2',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
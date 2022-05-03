import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        minHeight: 20,
        maxHeight: 33,
        paddingLeft: 24,
        marginTop: 10
    },
    interno: {
        width: 100,
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        marginRight: 8,
        backgroundColor: '#e1e1e1',
        borderColor: '#bababa',
        borderWidth: 1,
    },
    title: {
        color: 'black',
        fontSize: 13,
    },
});
import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 150,
        borderColor: '#eff3',
        borderWidth: 1,
        elevation: 1
    },
    input: {
        flex: 1,
        backgroundColor: '#fafafc',
        alignItems: 'center',
        justifyContent: 'center',

    },
    imageContainer: {
        width: "60%",
        height: "100%"
    },
    itens:{
        flex: 1,
        backgroundColor: '#fafafc',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
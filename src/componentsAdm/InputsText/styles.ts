import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    input: {
        height: 50,
        backgroundColor: '#fafafc',
        justifyContent: 'center',
        borderColor: '#eff3',
        borderWidth: 1,
        marginTop: 10,
        elevation: 4,
        borderRadius:14
    },
    labels: {
        paddingLeft: 10
    },
    text: {
        fontFamily: theme.fonts.poppinsMedium,
        marginLeft:10
    }

});
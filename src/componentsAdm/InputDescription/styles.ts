import { Platform, StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        alignItems: 'center'
    },
    input: {
        width: '80%',
        backgroundColor: '#fafafc',
        marginTop: 10,
        marginBottom: 30,
        color: 'white',
        borderRadius: 15,

        elevation: 4,
        borderColor: '#eff3',
        borderWidth: 1,
        justifyContent: 'center',
    },
    labels: {
        marginHorizontal: 10,
        marginVertical: 5,
        color: theme.colors.black
    },

})
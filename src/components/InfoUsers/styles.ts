import { StyleSheet, Platform } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({

    container: {
        width: '80%',
        marginTop: 70
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 70,
        justifyContent: "center",
        backgroundColor: '#fafafc',
    },
    content: {
        width: 80,
        height: 80,
        marginVertical: 15,
    },
    users: {
        marginBottom: 50
    },
    email: {
        color: theme.colors.white
    },
    title: {
        color: theme.colors.white
    }
})
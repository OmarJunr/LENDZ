import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '80%',
    },
    input:{
        height: 70,
        backgroundColor: '#fafafc',
        justifyContent: 'center',
        borderColor: '#eff3',
        borderWidth: 1,
        marginTop: 10,
        shadowColor: "#000",
        shadowOpacity: 0.23,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2.62,
        elevation: 4,
        
    },
    labels:{
        paddingLeft: 10,
    },
    eyes:{
        position:'absolute',
        right:10
    }

});
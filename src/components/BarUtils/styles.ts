import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({

    container: {
        paddingTop: getStatusBarHeight(),
        paddingHorizontal: Platform.OS === 'android' ? 15 : 25,
        width: '100%',
        height: '12%',
        justifyContent: 'center',
        backgroundColor:'#f6f6f6'
    },
    itens: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal:5
    },
    twoItens: {
        flexDirection: 'row',
    },
    diviser:{
        width:'100%',
        backgroundColor:'#f6f6f6',
        opacity:0.9,
        height:1
    }
})
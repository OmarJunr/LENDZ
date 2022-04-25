import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";



export function ButtonPrincipal() {
    const navigation = useNavigation()

    function Principal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }
    function teste() {
    
    }
    return (
        <RectButton
            style={styles.container}
            onPress={Principal}
        >
            <Text style={styles.title}>
                Entrar
            </Text>
        </RectButton>

    )
}
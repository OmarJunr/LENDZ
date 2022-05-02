import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

export function ButtonCadastro() {
    
    const navigation = useNavigation()

    function handleCadastro() {
        //@ts-ignore
        navigation.navigate("Cadastro");
    }

    return (
        <RectButton
            style={styles.container}
            onPress={handleCadastro}
        >
            <Text style={styles.title}>
                CADASTRE-SE
            </Text>
        </RectButton>
    )
}
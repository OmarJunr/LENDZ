import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";

export function ButtonCarrinho() {

    const navigation = useNavigation()

    function handleSolicitar() {
        //@ts-ignore
        navigation.navigate("SolicitacaoAceita");
    }

    return (
        <RectButton
            style={styles.container}
            onPress={handleSolicitar}
        >
            <Text style={styles.title}>
                SOLICITAR
            </Text>
            <AntDesign
                name="arrowright"
                color={theme.colors.black}
                size={30}
            /> 
        </RectButton>
    )
}
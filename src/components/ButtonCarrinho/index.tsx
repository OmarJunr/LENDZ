import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";

export function ButtonCarrinho() {

    const navigation = useNavigation()

    function handleSolicitar() {
        //@ts-ignore
        navigation.navigate("Solicitacao");
    }

    return (
        <RectButton
            style={styles.container}
            onPress={handleSolicitar}
        >
            <View style={styles.espacamento}>
                <Text style={styles.title}>
                    SOLICITAR
                </Text>
                <AntDesign
                    name="arrowright"
                    color={theme.colors.white}
                    size={30}
                />
            </View>
        </RectButton>
    )
}
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";

export function ButtonPrincipal() {
    const navigation = useNavigation()
    const { primary, secondary } = theme.colors;

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
            <LinearGradient
                style={styles.linear}
                colors={[primary, secondary]}
            />
            <Text style={styles.title}>
                Entrar
            </Text>
        </RectButton>

    )
}
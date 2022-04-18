import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';

export function ButtonEntry() {

    const navigation = useNavigation()

    function handleLogin() {
        //@ts-ignore
        navigation.navigate("Login");
    }

    return (
        <RectButton
            style={styles.container}
            onPress={handleLogin}
        >
            <Text style={styles.title}>
                ENTRAR
            </Text>
        </RectButton>
    )
}
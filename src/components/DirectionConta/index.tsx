import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

export function DirectionConta() {
    const navigation = useNavigation()


    function handleConta() {
        //@ts-ignore
        navigation.navigate("Conta");
    }
    return (
        <View style={styles.container}   >
            <RectButton onPress={handleConta} style={{ flexDirection: "row", alignItems: "center", width: '80%' }}>
                <Feather
                    name='user'
                    size={24}
                    color="white"
                />
                <Text style={styles.titles} >
                    Minha Conta
                </Text>
            </RectButton>
        </View>
    )
}
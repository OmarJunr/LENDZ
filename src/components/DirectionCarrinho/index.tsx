import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

export function DirectionCarrinho() {
    const navigation = useNavigation()


    function handleCarrinho() {
        //@ts-ignore
        navigation.navigate("Carrinho");
    }
    return (
        <View style={styles.container}   >
             <RectButton onPress={handleCarrinho} style={{ flexDirection: "row", alignItems: "center", width: '80%' }}>
            <Feather
                name='shopping-cart'
                size={24}
                color="white"
            />
            <Text style={styles.titles} >
                Meu carinho
            </Text>
            </RectButton>
        </View>
    )
}
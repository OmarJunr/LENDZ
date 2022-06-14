import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";


type Props = {
    ModalMinimaze: boolean
}

export function DirectionCarrinho({ModalMinimaze}:Props) {
    const navigation = useNavigation()

    function handleCarrinho() {
        ModalMinimaze(false)
           //@ts-ignore
        navigation.navigate("Carrinho");
    }
    return (
        <View style={styles.container}   >
             <RectButton style={{ flexDirection: "row", alignItems: "center", width: '80%' }}>
            <Feather
                name='shopping-cart'
                size={24}
                color="white"
                onPress={handleCarrinho}
            />
            <Text style={styles.titles}  onPress={handleCarrinho}>
                Meu carinho
            </Text>
            </RectButton>
        </View>
    )
}
import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
    ModalMinimaze: boolean
}

export function DirectionConta({ModalMinimaze}:Props) {
    const navigation = useNavigation()

    function handleConta() {
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("UserAdm");
    }
    return (
        <View style={styles.container}   >
            <RectButton style={{ flexDirection: "row", alignItems: "center", width: '80%' }}>
                <Feather
                    name='user'
                    size={24}
                    color="white"
                    onPress={handleConta}
                />
                <Text style={styles.titles}  onPress={handleConta}>
                    Minha Conta
                </Text>
            </RectButton>
        </View>
    )
}
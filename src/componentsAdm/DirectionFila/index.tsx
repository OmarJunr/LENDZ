import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
    ModalMinimaze: boolean
}

export function DirectionFila({ModalMinimaze}:Props) {
    const navigation = useNavigation()

    function handleFila() {
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("Fila");
    }
    return (
        <View style={styles.container}   >
            <RectButton style={{ flexDirection: "row", alignItems: "center", width: '80%' }}>

                <Feather
                    name='box'
                    size={24}
                    color="white"
                    onPress={handleFila} 
                />
                <Text style={styles.titles} onPress={handleFila} >
                    Esperando na Fila
                </Text>
                </RectButton >
        </View>
    )
}
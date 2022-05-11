import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
    ModalMinimaze: boolean
}

export function DirectionAjuda({ModalMinimaze}:Props) {
    const navigation = useNavigation()

    function handleAjuda() {
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("Ajuda");
    }
    return (
        <View style={styles.container}   >
               <RectButton style={{ flexDirection: "row", alignItems: "center", width: '80%' }}>
            <Feather
                name='help-circle'
                size={24}
                color="white"
                onPress={handleAjuda}
            />
            <Text style={styles.titles}  onPress={handleAjuda}>
                Ajuda
            </Text>
            </RectButton>
        </View>
    )
}
import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
    ModalMinimaze: boolean
}

export function DirectionPrincipal({ModalMinimaze}:Props) {
    const navigation = useNavigation()

    function handlePrincipal() {
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("Principal");
    }
    return (
        <View style={styles.container}   >
            <RectButton style={{flexDirection:"row",alignItems:"center",width:'80%'}}>
            <Feather
                name='home'
                size={24}
                color="white"
                onPress={handlePrincipal}
            />
            <Text style={styles.titles} onPress={handlePrincipal}>
                Principal
            </Text>
            </RectButton>
        </View>
    )
}
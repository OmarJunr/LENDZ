import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";


export function DirectionAjuda() {
    const navigation = useNavigation()


    function handleAjuda() {
        //@ts-ignore
        navigation.navigate("Ajuda");
    }
    return (
        <View style={styles.container}   >
               <RectButton onPress={handleAjuda} style={{ flexDirection: "row", alignItems: "center", width: '80%' }}>
            <Feather
                name='help-circle'
                size={24}
                color="white"
            />
            <Text style={styles.titles} >
                Ajuda
            </Text>
            </RectButton>
        </View>
    )
}
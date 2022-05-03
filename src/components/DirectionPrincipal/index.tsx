import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

export function DirectionPrincipal() {
    const navigation = useNavigation()


    function handlePrincipal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }
    return (
        <View style={styles.container}   >
            <RectButton onPress={handlePrincipal} style={{flexDirection:"row",alignItems:"center",width:'80%'}}>
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
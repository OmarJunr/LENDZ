import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

export function DirectionSuporte() {
    const navigation = useNavigation()


    function handleSuporte() {
        //@ts-ignore
        navigation.navigate("Suporte")
    }
    return (
        <View style={styles.container}   >
             <RectButton onPress={handleSuporte} style={{flexDirection:"row",alignItems:"center",width:'80%'}}>
            <Feather
                name='message-circle'
                size={24}
                color="white"
            />
            <Text style={styles.titles} >
                Chat do suporte
            </Text>
            </RectButton>
        </View>
    )
}
import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
    ModalMinimaze: boolean
}

export function DirectionSuporte({ModalMinimaze}:Props) {
    const navigation = useNavigation()

    function handleSuporte() {
        ModalMinimaze(false)
        //@ts-ignore
        navigation.navigate("SuporteAlunos")
    }
    return (
        <View style={styles.container}   >
             <RectButton style={{flexDirection:"row",alignItems:"center",width:'80%'}}>
            <Feather
                name='message-circle'
                size={24}
                color="white"
                onPress={handleSuporte}
            />
            <Text style={styles.titles}  onPress={handleSuporte}>
                Chat do suporte
            </Text>
            </RectButton>
        </View>
    )
}
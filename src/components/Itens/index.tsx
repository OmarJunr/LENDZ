import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

type Props = {
    IconSelected?: string;

}
export function Itens({ IconSelected }: Props) {

    const navigation = useNavigation()

    function HandleFila() {
        //@ts-ignore
        navigation.navigate("Fila");
    }

    function HandleUser() {
        //@ts-ignore
        navigation.navigate("User");
    }
    function HandlePrincipal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }
    return (
        <View style={styles.container}>
            <RectButton onPress={HandleFila} style={IconSelected == 'Fila' ? styles.buttonChecked : styles.buttonCheck}>
                <Feather name="box" size={26} color="white" onPress={HandleFila} />
            </RectButton>
            <RectButton onPress={HandlePrincipal} style={IconSelected == 'Principal' ? styles.buttonChecked : styles.buttonCheck}>
                <Feather name="home" size={26} color="white" />
            </RectButton>
            <RectButton onPress={HandleUser} style={IconSelected == 'User' ? styles.buttonChecked : styles.buttonCheck}>
                <Feather name="user" size={26} color="white" />
            </RectButton>
        </View>
    )
}
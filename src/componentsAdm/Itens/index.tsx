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

    function HandleSolicitacao() {
        //@ts-ignore
        navigation.navigate("SolicitacaoPendetes");
    }

    function HandleUser() {
        //@ts-ignore
        navigation.navigate("UserAdm");
    }
    function HandlePrincipal() {
        //@ts-ignore
        navigation.navigate("PrincipalAdm");
    }
    return (
        <View style={styles.container}>
            <RectButton onPress={HandleSolicitacao} style={IconSelected == 'Fila' ? styles.buttonChecked : styles.buttonCheck}>
                <Feather name="box" size={26} color="white" onPress={HandleSolicitacao} />
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
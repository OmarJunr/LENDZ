import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text} from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";


export function ButtonVsu() {

    const navigation = useNavigation()

    function HandlePassworld() {
        //@ts-ignore
        navigation.navigate("VerifyVsu");
    }

    return (
        <RectButton
            style={styles.container}
            onPress={HandlePassworld}
        >
            <Text style={styles.title}>
               Esqueceu a senha?
            </Text>
        </RectButton>
    )
}
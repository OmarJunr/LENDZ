import React from "react";

import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";


type Props = {
    icon: string;
    local: string;
}

export function ButtonRefit({ icon, local }: Props) {
    const navigation = useNavigation();

    function handleDirection() {
        //@ts-ignore
        navigation.navigate(local);
    }
    return (
        <RectButton style={icon != 'edit' ? styles.containerDelete : styles.containerEdit } onPress={handleDirection} >
            <Feather name={icon} size={26} color="white" />
        </RectButton>
    )
}
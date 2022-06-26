import React from "react";

import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

export type ItenProps = {
    id: string;
    title: string;
    quantSol: number;
    dispo: number;
    aluno: string;
    icon: string;
    emprest: string;
}

type Props = {
    icon: string;
    local: string;
    data: ItenProps
}

export function ButtonRefit({ icon, local, data }: Props) {
    const navigation = useNavigation();

    function handleDirection() {
        //@ts-ignore
        navigation.navigate(local , {
            paramKey: data,
        })
    }
    return (
        <RectButton style={icon != 'edit' ? styles.containerDelete : styles.containerEdit} onPress={handleDirection} >
            <Feather name={icon} size={26} color="white" />
        </RectButton>
    )
}
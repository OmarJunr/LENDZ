import React from "react";

import { View, Text } from "react-native";
import { styles } from './styles';
import { DirectionAjuda } from "../DirectionAjuda";
import { DirectionConta } from "../DirectionConta";
import { DirectionCarrinho } from "../DirectionCarrinho";
import { DirectionPrincipal } from "../DirectionPrincipal";
import { DirectionFila } from "../DirectionFila";
import { DirectionSuporte } from "../DirectionSuporte";

type Props = {
    ModalMinimaze: boolean
}

export function MenuDirection({ ModalMinimaze }: Props) {

    return (
        <View style={styles.container}>
            <DirectionPrincipal ModalMinimaze={ModalMinimaze} />
            <DirectionCarrinho ModalMinimaze={ModalMinimaze} />
            <DirectionFila ModalMinimaze={ModalMinimaze} />
            <DirectionConta ModalMinimaze={ModalMinimaze} />
            <DirectionSuporte ModalMinimaze={ModalMinimaze} />
            <DirectionAjuda ModalMinimaze={ModalMinimaze} />
        </View>
    )
}
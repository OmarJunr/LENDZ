import React from "react";

import { View, Text } from "react-native";
import { styles } from './styles';
import { DirectionAjuda } from "../DirectionAjuda";
import { DirectionConta } from "../DirectionConta";
import { DirectionCarrinho } from "../DirectionCarrinho";
import { DirectionPrincipal } from "../DirectionPrincipal";
import { DirectionFila } from "../DirectionFila";
import { DirectionSuporte } from "../DirectionSuporte";

export function MenuDirection() {

    return (
        <View style={styles.container}>
            <DirectionPrincipal />
            <DirectionCarrinho />
            <DirectionFila />
            <DirectionConta />
            <DirectionSuporte />
            <DirectionAjuda />
        </View>
    )
}
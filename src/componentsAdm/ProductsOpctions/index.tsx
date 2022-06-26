import React, { useState } from "react";

import { View, Text, ImageBackground } from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { ButtonRefit } from "../ButtonRefit";

export type EventProps = {
    id: string;
    title: string;
    quantSol: number;
    dispo: number;
    aluno: string;
    icon: string;
    emprest: string;
}

type Props = {
    data: EventProps;
}

export function ProductsOpctions({ data }: Props) {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <ImageBackground source={data.icon} style={styles.image} />
            </View>
            <View style={styles.infos}>
                <Text style={styles.title}>
                    {data.title}
                </Text>

                <Text style={styles.solicitado}>
                    Solicitado:{data.quantSol}  de Disponivel {data.dispo}
                </Text>
                <Text style={styles.aluno}>
                    Emprestados: {data.emprest}
                </Text>
                <View style={styles.refitContainer}>
                    <ButtonRefit local="Edit" icon="edit" />
                    <ButtonRefit local="delete" icon="trash" />
                </View>
            </View>

        </View>


    );
}
import React, { useState } from "react";

import { View, Text, ImageBackground, Image } from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'

export type EventProps = {
    id: string;
    title: string;
    email: string;
    icon: string;
}
type Props = {
    data: EventProps;
}

export function Alunos({ data }: Props) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <RectButton style={styles.button} onPress={() => {
                navigation.navigate('SuporteAdm', {
                    paramKey: data,
                })
            }}>
                <View style={styles.containerImage}>
                    <Image source={data.icon} style={styles.image} />
                </View>
                <Text style={styles.text}>
                    Aluno(a) - {data.title}
                </Text>
            </RectButton>
        </View>
    );
}
import React, { useState } from "react";

import { View, Text, ImageBackground } from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'

export type EventProps = {
    id: string;
    title: string;
    diasRest: number;
    emprestados: number;
    aluno: string;
    icon: string;
}

type Props = {
    data: EventProps;
}

export function BorrowedProducts({ data }: Props) {
    const [check, setcheck] = useState(false);
    const navigation = useNavigation()
    return (
        <RectButton style={styles.container} onPress={() => {
            navigation.navigate('InfoItemAdm', {
                paramKey: data,
            })
        }}>

            <View style={styles.imageContainer}>
                <ImageBackground source={data.icon} style={styles.image} />
            </View>
            <View style={styles.infos}>
                <Text style={styles.title}>
                    {data.title}
                </Text>

                <Text style={styles.text}>
                    Aluno(a): {data.aluno}
                </Text>
                <Text style={styles.text}>
                   Emprestados: {data.emprestados}
                </Text>
                <Text style={styles.text}>
                   Dias Restantes: {data.diasRest}
                </Text>
            </View>
        </RectButton>


    );
}
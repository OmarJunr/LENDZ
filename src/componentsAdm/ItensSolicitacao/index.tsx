import React, { useState } from "react";

import { View, Text, ImageBackground } from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'

export type EventProps = {
    id: string;
    title: string;
    quantSol: number;
    dispo: number;
    aluno: string;
    icon: string;
}

type Props = {
    data: EventProps;
}

export function ItensSolicitacao({ data }: Props) {
    const [check, setcheck] = useState(false);
    const navigation = useNavigation()
    return (
        <RectButton style={styles.container} onPress={() => {
            setcheck(!check)
        }}>
            <View style={styles.select}>
                <View style={styles.check}>
                    <Feather
                        name={check ? 'check' : ""}
                        size={25}
                        color='black'
                    />
                </View>
            </View>
            <View style={styles.image}>
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
                    Aluno: {data.aluno}
                </Text>
            </View>
        </RectButton>


    );
}
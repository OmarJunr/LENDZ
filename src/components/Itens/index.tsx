import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export function Itens() {
    return (
        <View style={styles.container}>
            <RectButton >
                <Feather name="box" size={24} color="white" />
            </RectButton>
            <RectButton>
                <Feather name="home" size={24} color="white" />
            </RectButton>
            <RectButton>
                <Feather name="user" size={24} color="white" />
            </RectButton>
        </View>
    )
}
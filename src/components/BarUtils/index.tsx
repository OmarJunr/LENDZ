import React from "react";
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export function BarUtils() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.itens}>
                    <Feather name="menu" size={24} color="black" />
                    <View style={styles.twoItens}>
                        <Feather name="bell" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <Feather name="shopping-cart" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.diviser} />
        </>
    )
}
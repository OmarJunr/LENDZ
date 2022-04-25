import React from "react";
import { Text, View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <Feather name="search" size={24} color="black" />
                <TextInput placeholder="Search">
                </TextInput>
            </View>
            <View style={styles.filter}>
                <Feather name="filter" size={24} color="black" />
            </View>
        </View>
    )
}
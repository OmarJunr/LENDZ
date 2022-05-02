import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

type Props = {
    icon?: string;
    title: string
}
export function Direction({ icon, title }: Props) {
    return (
        <View style={styles.container}>
            <Feather
                name = { icon ? icon:"help-circle" }
                size={24}
                color="white" />
            <Text style={styles.titles}>
                {title}
            </Text>
        </View>
    )
}
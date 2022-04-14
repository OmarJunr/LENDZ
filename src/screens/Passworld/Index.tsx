import React from "react";
;
import {
    View, Image, Text
} from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import IllustrationImg from '../../assets/illustration.png';

export function Passworld() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Image
                source={IllustrationImg}
                style={styles.image} resizeMode="stretch"
            />
            <Text style={styles.title}>
                LENDZ
            </Text>
        </View>

    );
}
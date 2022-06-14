import React from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
    title: string;
    local: string;
    width: string;
    height: string;
}

export function ButtonDirection({ title, local, width, height }: Props) {
    const isbool = ((width == "") || (height == ""))

    const navigation = useNavigation();
    const { primary, secondary } = theme.colors;

    function handleDirection() {
        //@ts-ignore
        navigation.navigate(local);
    }
    return (
        <RectButton style={[styles.container, {
            width: isbool ? '80%' : width,
            height: isbool ? '10%' : height
        }]} onPress={handleDirection} >
            <LinearGradient
                style={styles.linear}
                colors={[primary, secondary]}
            />
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}
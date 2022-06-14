import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";

type Props = {
    title: string;
    local?: string
}

export function Button({ title, local, ...rest }: Props) {
    const navigation = useNavigation()
    const { primary, secondary } = theme.colors;

    function Principal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }
    function teste() {
    
    }
    return (
        <RectButton
            style={styles.container}
            onPress={local ? Principal : teste}
            {...rest}
        >
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
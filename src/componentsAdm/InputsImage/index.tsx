import React from "react";

import { TextInput, View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';


export function InputsImage() {
    return (
        
            <View style={styles.container}>
                <RectButton style={styles.input}>
                    <Feather name="camera" size={40} color="black" />
                    <Text>
                        Upload Imagem
                    </Text>
                </RectButton>
            </View>
        
    )
}
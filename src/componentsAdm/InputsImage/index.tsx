import React, { useState } from "react";

import { Image, View, Text } from 'react-native';
import { RectButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';

import { styles } from './styles';

type Props = {
    image?: string;
}

export function InputsImage({ image }: Props) {
    const [check, setCheck] = useState(image == undefined)


    return (

        <View style={styles.container}>

            <RectButton style={styles.input} enabled={check}>
                <Image source={image} style={[styles.imageContainer, check == true ? { display: 'none' } : { display: 'flex' }]} />
                <View style={[styles.itens, check == true ? { display: 'flex' } : { display: 'none' }]} >
                    <Feather name="camera" size={40} color="black" />
                    <Text>
                        Upload Imagem
                    </Text>
                </View>
            </RectButton>
        </View>

    )
}
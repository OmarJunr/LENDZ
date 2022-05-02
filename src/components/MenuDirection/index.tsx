import React from "react";

import { View, Text } from "react-native";
import { styles } from './styles';
import { Direction } from "../Direction";
import { RectButton } from "react-native-gesture-handler";

export function MenuDirection() {

    return (
        <View style={styles.container}>
            <RectButton style={{ width: '80%' }}>
                <Direction title="Principal" icon="home" />
            </RectButton>
            <RectButton style={{ width: '80%' }}>
                <Direction title="Meu carinho" icon="shopping-cart" />
            </RectButton>
            <RectButton style={{ width: '80%' }}>
                <Direction title="Esperando na Fila" icon="box" />
            </RectButton>
            <RectButton style={{ width: '80%' }}>
                <Direction title="Minha Conta" icon="user" />
            </RectButton>
            <RectButton style={{ width: '80%' }}>
                <Direction title="Chat do suporte" icon="message-circle" />
            </RectButton>
            <RectButton style={{ width: '80%' }}>
                <Direction title="Ajuda" icon="help-circle" />
            </RectButton>
        </View>
    )
}
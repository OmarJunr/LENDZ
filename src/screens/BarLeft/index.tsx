import React, { useRef } from "react";

import { View, Text, Animated, Pressable } from 'react-native';
import { Background } from "../../components/Background";
import { InfoUsers } from "../../components/InfoUsers";
import { MenuDirection } from "../../components/MenuDirection";

import { styles } from './styles';

type Props = {
    ModalMinimaze: boolean
}

export function BarLeft({ ModalMinimaze }: Props) {
    const largura = useRef(new Animated.Value(0)).current;

    Animated.timing(largura, {
        toValue: 300,
        duration: 500,
        useNativeDriver: false
    }).start();

    return (
        <>
            <View style={styles.container}>
                <Animated.View style={{
                    width: largura,
                    height: '100%',
                    backgroundColor: '#014F89'
                }}>

                    <Background>
                        <View style={styles.menu}>

                            <InfoUsers />
                            <Pressable style={styles.lines} onPress={() => ModalMinimaze(false)} >
                                <View style={styles.line} />
                            </Pressable>
                            <MenuDirection />
                        </View>

                    </Background>

                </Animated.View>
            </View>
            <Pressable style={styles.minimaze} onPress={() => ModalMinimaze(false)} />
        </>
    );
}
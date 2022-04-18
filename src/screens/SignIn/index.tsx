import React from "react";
import {
    Text,
    View,
    Image,
} from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { ButtonCadastro } from "../../components/ButtonCadastro";
import { ButtonEntry } from "../../components/ButtonEntry";

export function SignIn() {
    return (
        <Background>
            
            <View style={styles.container}>
                <Image
                    source={IllustrationImg}
                    style={styles.image} resizeMode="stretch"
                />
                <Text style={styles.title}>
                    LENDZ
                </Text>
            </View >

            <View style={styles.buttons}>
                <ButtonEntry />
                <ButtonCadastro />
            </View>

        </Background>

    );
}
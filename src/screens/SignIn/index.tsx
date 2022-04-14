import React from "react";
import {
    Text,
    View,
    Image,
} from 'react-native';
import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { ButtonCadastro } from "../../components/ButtonCadastro";

import { RectButton } from "react-native-gesture-handler";

export function SignIn() {
    const navigation = useNavigation()

    function handleEntrar() {
        navigation.navigate("Login");
    }

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
                <RectButton
                    style={styles.buttonEntry}
                    onPress={handleEntrar}
                >
                    <Text style={styles.titleButton}>
                        ENTRAR
                    </Text>
                </RectButton>
                <ButtonCadastro />
            </View>
        </Background>

    );
}
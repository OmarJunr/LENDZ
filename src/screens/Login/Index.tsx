import React from "react";

import {
    View, Text, ScrollView, KeyboardAvoidingView, Platform, Image
} from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { Lines } from '../../components/Lines';
import { InputsText } from "../../components/InputsText";
import { InputsPassword } from "../../components/InputsPassword";
import { Button } from "../../components/Button";
import { RectButton } from "react-native-gesture-handler";
import IllustrationImg from '../../assets/illustration.png';
import { Passworld } from "../Passworld/Index";

export function Login() {
    const navigation = useNavigation()

    function HandlePassworld() {
        navigation.navigate("Passworld");
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        source={IllustrationImg}
                        style={styles.image} resizeMode="stretch"
                    />
                    <Text style={styles.title}>
                        LENDZ
                    </Text>
                    <View>
                        <Lines />
                        <Text style={styles.label}>
                            ENTRAR
                        </Text>
                        <Lines />
                    </View>
                    <View style={styles.form}>
                        <InputsText title="Usuario" placeholder="Digite Seu usuario" />
                        <InputsPassword title="Senha" placeholder="Digite Sua Senha" />
                        <Button title="Entrar" />
                        <RectButton onPress={HandlePassworld} style={styles.teste}>
                            <Text style={styles.labelPass}>Esqueceu a sena ?</Text>
                        </RectButton>
                    </View>
                </View>
                <View>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    );
}
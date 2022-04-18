import React, { useState } from "react";
import {
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { Button } from "../../components/Button";
import { InputsEmail } from "../../components/InputsEmail";
import { InputsNumeric } from "../../components/InputsNumeric";
import { InputsPassword } from "../../components/InputsPassword";
import { InputsText } from "../../components/InputsText";
import { Lines } from "../../components/Lines";

export function Cadastro() {
    const navigation = useNavigation()

    function handleSignIn() {
        //@ts-ignore
        navigation.navigate("SignIn");
    }

    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.cabecalho}>
                    <AntDesign
                        name="arrowleft"
                        color={theme.colors.heading}
                        size={30}
                        onPress={handleSignIn}
                    />
                    <Image
                        source={IllustrationImg}
                        style={styles.image} resizeMode="stretch"
                    />
                </View>
                <View style={styles.form}>

                    <View style={styles.TitleBox}>
                        <Lines />
                        <Text style={styles.label}>
                            CADASTRO
                        </Text>
                        <Lines />
                    </View>

                    <InputsText title="Nome Completo" placeholder="Digite Seu Nome Aqui" />
                    <InputsEmail title="E-mail" placeholder="Digite Seu E-mail Aqui" />
                    <InputsNumeric title="Celular" placeholder="Digite Seu Celular Aqui" />
                    <InputsPassword title="Senha" placeholder="Senha" />
                    <InputsPassword title="Confirme sua Senha" placeholder="Confirme sua Senha" />
                    <Button
                        title="Cadastre-se"
                    />
                </View>

            </ScrollView>
        </KeyboardAvoidingView>

    );
}
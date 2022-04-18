import React from "react";

import {
    View, Text, ScrollView, KeyboardAvoidingView, Platform, Image, Pressable
} from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { Lines } from '../../components/Lines';
import { AntDesign } from '@expo/vector-icons'
import { InputsText } from "../../components/InputsText";
import { InputsPassword } from "../../components/InputsPassword";
import { Button } from "../../components/Button";
import { RectButton } from "react-native-gesture-handler";
import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { ButtonPassword } from "../../components/ButtonPassword";

export function Login() {
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
                <Text style={styles.title}>
                    LENDZ
                </Text>
                <View style={styles.form}>

                    <View style={styles.teste}>
                        <Lines />
                        <Text style={styles.label}>
                            ENTRAR
                        </Text>
                        <Lines />
                    </View>

                    <InputsText title="Usuario" placeholder="Digite Seu usuario" />
                    <InputsPassword title="Senha" placeholder="Digite Sua Senha" />
                    <Button title="Entrar" />
                    <ButtonPassword/>
                </View>
                
            </ScrollView>
        </KeyboardAvoidingView>

    );
}
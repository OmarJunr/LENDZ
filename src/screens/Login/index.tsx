import React from "react";

import {
    View, Text, ScrollView, KeyboardAvoidingView, Platform, Image
} from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { Lines } from '../../components/Lines';
import { AntDesign } from '@expo/vector-icons'
import { InputsText } from "../../components/InputsText";
import { InputsPassword } from "../../components/InputsPassword";
import { Button } from "../../components/Button";
import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { ButtonVsu } from "../../components/ButtonVsu";
import { Background } from "../../components/Background";
import { ButtonPrincipal } from "../../components/ButtonPrincipal";

export function Login() {
    const navigation = useNavigation()

    return (
        <Background>
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.cabecalho}>
                        <AntDesign
                            name="arrowleft"
                            color={theme.colors.heading}
                            size={30}
                            onPress={navigation.goBack}
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
                        <View style={styles.TitleBox}>
                            <Lines />
                            <Text style={styles.label}>
                                ENTRAR
                            </Text>
                            <Lines />
                        </View>

                        <InputsText title="Usuario" placeholder="Digite Seu usuario" />
                        <InputsPassword title="Senha" placeholder="Digite Sua Senha" />
                        <ButtonPrincipal />
                        <ButtonVsu />
                    </View>
                </View>
            </ScrollView>
        </Background>

    );
}
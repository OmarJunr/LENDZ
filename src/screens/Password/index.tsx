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
import { ButtonPassword } from "../../components/ButtonPassword";
import { Background } from "../../components/Background";

export function Password() {
    const navigation = useNavigation()

    function handleVsu() {
        //@ts-ignore
        navigation.navigate("VerifyVsu");
    }

    return (
        <Background>
            <ScrollView style={styles.container}>
            
                    <View style={styles.cabecalho}>
                        <AntDesign
                            name="arrowleft"
                            color={theme.colors.heading}
                            size={30}
                            onPress={handleVsu}
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
                                ALTERAR SENHA
                            </Text>
                            <Lines />
                        </View>

                        <InputsPassword title="Nova senha" placeholder="Digite sua nova senha" />
                        <InputsPassword title="Confirme sua nova senha" placeholder="Digite sua nova senha" />
                        <Button title="ALTERAR" />
                    </View>
              
            </ScrollView>
            </Background>
    );
}
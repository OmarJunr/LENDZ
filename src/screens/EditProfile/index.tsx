import React from "react";

import { View, Text } from 'react-native';

import { RectButton } from "react-native-gesture-handler";
import { InputsEmail } from "../../components/InputsEmail";
import { InputsNumeric } from "../../components/InputsNumeric";
import { InputsText } from "../../components/InputsText";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native"
import { InputsImage } from "../../components/InputsImage";
import { Background } from "../../components/Background";
import { Itens } from "../../components/Itens";
import { LinearGradient } from 'expo-linear-gradient';


export function EditProfile() {
    const navigation = useNavigation()
    const { primary, secondary } = theme.colors;
    function HandlePassworld() {
        //@ts-ignore
        navigation.navigate("VerifyVsu");
    }
    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.screen}>
                    <View style={styles.cabecalho}>
                        <AntDesign
                            name="arrowleft"
                            color={theme.colors.black}
                            size={30}
                            onPress={navigation.goBack}
                        />
                        <Text style={styles.title}>Editar Perfil</Text>
                    </View>

                    <InputsImage />
                    <InputsText title="Nome Completo" placeholder="Digite Seu Nome Aqui" />
                    <InputsEmail title="E-mail" placeholder="Digite Seu E-mail Aqui" />
                    <InputsNumeric title="Celular" placeholder="Digite Seu Celular Aqui" />
                    <RectButton style={styles.button} onPress={HandlePassworld}>
                        <LinearGradient
                            style={styles.linear}
                            colors={[primary, secondary]}
                        />
                        <Text style={styles.textButton}>
                            Alterar senha
                        </Text>
                    </RectButton>
                    <RectButton style={styles.button}>
                        <LinearGradient
                            style={styles.linear}
                            colors={[primary, secondary]}
                        />
                        <Text style={styles.textButton}>
                            Salvar
                        </Text>
                    </RectButton>
                </View>
                <Itens />
            </View>
        </Background>
    );
}
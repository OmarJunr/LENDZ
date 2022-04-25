import React from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import Lottie from 'lottie-react-native';

import rocket from '../../assets/gif.json'

import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export function Solicitacao() {
    const navigation = useNavigation()


    function handlePrincipal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }
    return (

        <View style={styles.container}>
            <SafeAreaView style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie resizeMode='contain' source={rocket} autoPlay loop />
            </SafeAreaView>
            <View style={styles.itens}>
                <Text style={styles.title}>
                    Sua Solicitação foi aceita!
                </Text>
                <Text style={styles.subTitle}>
                    Va até o Sala da Coordenação para
                </Text>
                <Text style={styles.subTitle}>
                    retirar seus itens solicitados!
                </Text>
                <LinearGradient style={styles.local} colors={['#61A5C2', '#7ec8e1']}>
                    <Text style={styles.localText}>
                        VERIFIQUE LOCAL
                    </Text>
                    <Text style={styles.localText}>
                        PARA RETIRADA
                    </Text>
                </LinearGradient>
                <Pressable style={styles.voltar} onPress={handlePrincipal}>
                    <Text style={styles.voltarText}>
                        VOLTAR PARA TELA PRINCIPAL
                    </Text>
                </Pressable>

            </View>
        </View>

    )
}
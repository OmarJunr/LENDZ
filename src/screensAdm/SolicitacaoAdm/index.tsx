import React from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import Lottie from 'lottie-react-native';

import rocket from '../../assets/gif.json'

import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

export function SolicitacaoAdm() {
    const navigation = useNavigation()

    function handlePrincipal() {
        //@ts-ignore
        navigation.navigate("PrincipalAdm");
    }
    function handleSolicitacaoPendetes() {
        //@ts-ignore
        navigation.navigate("SolicitacaoPendetes");
    }
    return (

        <View style={styles.container}>
            <SafeAreaView style={{ width: '100%', height: '50%', justifyContent: 'center', alignItems: 'center' }}>
                <Lottie resizeMode='contain' source={rocket} autoPlay loop />
            </SafeAreaView>
            <View style={styles.itens}>
                <Text style={styles.title}>
                    { }Entregue!
                </Text>
                <Text style={styles.subTitle}>
                    O aluno tem 15 dias para devolver o
                </Text>
                <Text style={styles.subTitle}>
                    produto caso não devolva,
                </Text>
                <Text style={styles.subTitle}>
                    será passivel a multa de 5 reais!
                </Text>
                <LinearGradient style={styles.local} colors={['#61A5C2', '#7ec8e1']}>
                    <Pressable onPress={handleSolicitacaoPendetes} style={styles.return}>
                        <Text style={styles.localText}>
                            RETORNAR PARA SOLICITAÇÕES
                        </Text>
                        <Text style={styles.localText}>
                            PENDENTES
                        </Text>
                    </Pressable>
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
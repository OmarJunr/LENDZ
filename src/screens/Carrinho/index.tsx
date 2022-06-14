import React from "react";

import {
    View, Text, ScrollView, KeyboardAvoidingView, Platform, Image
} from 'react-native';

import { RectButton } from "react-native-gesture-handler";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { Lines } from '../../components/Lines';
import { AntDesign } from '@expo/vector-icons'
import { InputsText } from "../../components/InputsText";
import { InputsPassword } from "../../components/InputsPassword";
import { ButtonCarrinho } from "../../components/ButtonCarrinho";
import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { ButtonPassword } from "../../components/ButtonPassword";
import { ButtonVsu } from "../../components/ButtonVsu";
import { Background } from '../../components/Background';
import foto1 from '../../../assets/fotoscarrinho/image2.png';
import foto2 from '../../../assets/fotoscarrinho/fita.png';
import { Itens } from "../../components/Itens";

export function Carrinho() {

    const navigation = useNavigation()

    function HandlePrincipal() {
        //@ts-ignore
        navigation.navigate("Principal");
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
                            onPress={HandlePrincipal}
                        />
                        <Text style={styles.title}>Seu Carrinho</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={foto1}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={styles.font}>Pendrive 16GB</Text>
                        <Text style={styles.disponivel}>Disponível: 5</Text>
                        <View style={styles.qtdButtons}>
                            <RectButton>
                                <AntDesign
                                    name="minuscircleo"
                                    color={"grey"}
                                    size={20}
                                />
                            </RectButton>
                            <Text style={styles.quantity}>1</Text>
                            <RectButton>
                                <AntDesign
                                    name="pluscircleo"
                                    color={"grey"}
                                    size={20}
                                />
                            </RectButton>
                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            source={foto2}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.itemInfo}>
                        <Text style={styles.font}>Filtros de Linha</Text>
                        <Text style={styles.disponivel}>Disponível: 5</Text>
                        <View style={styles.qtdButtons}>
                            <RectButton>
                                <AntDesign
                                    name="minuscircleo"
                                    color={"grey"}
                                    size={20}
                                />
                            </RectButton>
                            <Text style={styles.quantity}>1</Text>
                            <RectButton>
                                <AntDesign
                                    name="pluscircleo"
                                    color={"grey"}
                                    size={20}
                                />
                            </RectButton>
                        </View>
                    </View>
                    <View style={styles.rodape}>
                        <Text style={styles.textRodape}>ITENS A SOLICITAR</Text>
                        <Text style={styles.textRodapeQtd}>2</Text>
                        <ButtonCarrinho />
                    </View>
                </View>
                <Itens/>
            </View>
        </Background>
    );
}
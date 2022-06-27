import React, { useState } from "react";

import {
    View, Text, ScrollView, KeyboardAvoidingView, Platform, Image, ImageBackground
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
import { Background } from '../../components/Background';
import foto1 from '../../../assets/fotoscarrinho/image2.png';
import foto2 from '../../../assets/fotoscarrinho/fita.png';
import { Itens } from "../../components/Itens";
import { products, removeItem } from "../../utils/products";

export function Carrinho() {

    const navigation = useNavigation()

    function HandlePrincipal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }

    function HandleRefresh() {
        //@ts-ignore
        navigation.navigate("Carrinho");
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
                    <ScrollView>
                        {products.map((product) => {
                            const [count, setCount] = useState(1);
                            return (
                                <View>
                                    <View style={styles.imageContainer}>
                                        <Image
                                            source={{uri: product.icon}}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View style={styles.itemInfo}>
                                        <Text style={styles.font}>{product.title}</Text>
                                        <Text style={styles.disponivel}>Disponível: {product.quant}</Text>
                                        <View style={styles.qtdButtons}>
                                            <RectButton onPress={() => {
                                                if ((count - 1) == 0) {
                                                    removeItem(product);
                                                    // HandleRefresh();
                                                } else setCount(count -  1)
                                                }}>
                                                <AntDesign
                                                    name="minuscircleo"
                                                    color={"grey"}
                                                    size={20}
                                                />
                                            </RectButton>
                                            <Text style={styles.quantity}>{count}</Text>
                                            <RectButton onPress={() => {
                                                if ((count + 1) > product.quant) {
                                                } else setCount(count +  1)
                                                }}>
                                                <AntDesign
                                                    name="pluscircleo"
                                                    color={"grey"}
                                                    size={20}
                                                />
                                            </RectButton>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                    <View style={styles.rodape}>
                        <ButtonCarrinho />
                    </View>
                    </ScrollView>
                </View>
                <Itens />
            </View>
        </Background>
    );
}
import React, { useEffect, useState } from "react";

import {
    View, Text, ScrollView, KeyboardAvoidingView, Platform, Image
} from 'react-native';

import { RectButton } from "react-native-gesture-handler"
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
import foto1 from '../../assets/assets/hdexterno.png'
import { Itens } from "../../components/Itens";
import { get, ref } from "firebase/database";
import db from "../../database/database";
import { getKey } from "../../utils/saveId";
import { fila, filaAddItem } from "../../utils/fila";

export function Fila() {
    const [products, setProducts] = useState(null)

    const navigation = useNavigation()

    function HandlePrincipal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }

    // async function getSolicitadosList() {
    //     get(ref(db, '/solicitacao/' + getKey() + '/solicitacao_id/')).then(productList => {
    //         productList.forEach((product) => {
    //             filaAddItem(product)
    //         })
    //     })
    // }

    async function getSolicitadosList() {
        get(ref(db, '/solicitacao/' + getKey() + '/solicitacao_id/')).then((rproducts) => {
            if (rproducts && rproducts.val()) {
                setProducts(rproducts.val())
            } else {
                setProducts([])
            }
        })
    }

    useEffect(() => {
        getSolicitadosList()
    })


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
                        <Text style={styles.title}>Fila de Empréstimos</Text>
                    </View>
                    <ScrollView>
                        {
                            products && products.map((product) => (
                                <View>
                                    <View style={styles.imageContainer}>
                                        <Image
                                            source={{ uri: product.icon }}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View style={styles.itemInfo}>
                                        <Text style={styles.font}>{product.title}</Text>
                                        <Text style={styles.disponivel}>Unidades solicitadas:</Text>
                                        <Text style={styles.quantity}>{product.quant}</Text>
                                    </View>
                                </View>
                            ))
                        }

                        {/* {fila.map((product) => {
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
                                        <Text style={styles.disponivel}>Unidades solicitadas:</Text>
                                        <Text style={styles.quantity}>{product.quant}</Text>
                                    </View>
                                </View>
                            );
                        })} */}
                    </ScrollView>
                </View>
                <Itens IconSelected="Fila" />
            </View>
        </Background>
    );
}
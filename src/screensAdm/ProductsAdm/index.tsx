import React from "react";

import { View, Text } from 'react-native';

import { FlatList, RectButton } from "react-native-gesture-handler";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { Background } from '../../componentsAdm/Background';
import { solicitacoes } from '../../utils/solicitacoes';
import { Itens } from "../../componentsAdm/Itens";
import { ButtonDirection } from "../../componentsAdm/ButtonDirection";
import { BarUtils } from "../../componentsAdm/BarUtils";
import { ProductsOpctions } from "../../componentsAdm/ProductsOpctions";

export function ProductsAdm() {

    const navigation = useNavigation()
    return (
        <Background>
            <BarUtils />
            <View style={styles.container}>
                <View style={styles.screen}>
                    <View style={styles.containerFlat}>
                        <FlatList style={styles.FlatList} keyExtractor={item => item.id} data={solicitacoes} renderItem={({ item }) => (
                            <ProductsOpctions data={item} />
                        )} />
                    </View>
                    <View style={styles.selected}>

                        <ButtonDirection title="ADICIONAR PRODUTO" local="SolicitacaoAdm" width="80%" height="45%"/>
                    </View>
                </View>
                <Itens />
            </View>
        </Background>
    );
}
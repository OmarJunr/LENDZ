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
import { ItensSolicitacao } from "../../componentsAdm/ItensSolicitacao";
import { ButtonDirection } from "../../componentsAdm/ButtonDirection";

export function SolicitacaoPendetes() {

    const navigation = useNavigation()
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
                        <Text style={styles.title}>Solcitações Pendentes</Text>
                    </View>
                    <View style={styles.containerFlat}>
                        <FlatList style={styles.FlatList} keyExtractor={item => item.id} data={solicitacoes} renderItem={({ item }) => (
                            <ItensSolicitacao data={item} />
                        )} />
                    </View>
                    <View style={styles.selected}>
                        <Text style={styles.text}>
                            [ 1 ] - Selecionados(s)
                        </Text>
                        <ButtonDirection title="Entregar" local="SolicitacaoAdm" width="60%" height="30%"/>
                    </View>
                </View>
                <Itens />
            </View>
        </Background>
    );
}
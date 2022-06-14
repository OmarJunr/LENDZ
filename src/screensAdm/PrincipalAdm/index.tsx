import React, { useState } from "react";
import { View} from 'react-native';
import { Background } from "../../componentsAdm/Background";
import { BarUtils } from "../../componentsAdm/BarUtils";

import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { Itens } from "../../componentsAdm/Itens";
import { ButtonDirection } from "../../componentsAdm/ButtonDirection";

export function PrincipalAdm() {
    const navigation = useNavigation()

    return (

        <Background>
            <BarUtils />
                <View style={styles.container}>
               
                    <View style={styles.screen}>

                        <ButtonDirection title="Produtos" local="Produtos" height="" width=""/>
                        <ButtonDirection title="Solicitações Pendetes" local="SolicitacaoPendente" height="" width=""/>
                        <ButtonDirection title="Gerenciar Estoque" local="GerenciarEstoque" height="" width=""/>
                        <ButtonDirection title="Chat Com Aluno" local="ChatAluno" height="" width=""/>
                        <ButtonDirection title="Emprestados" local="Emprestados" height="" width=""/>
                        <ButtonDirection title="Visão Cliente" local="Principal" height="" width=""/>

                    </View>
                    <Itens IconSelected="Principal"/>
                </View>
        </Background>
    );
}
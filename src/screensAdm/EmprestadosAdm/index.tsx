import React from "react";

import { View, Text } from 'react-native';

import { FlatList, RectButton } from "react-native-gesture-handler";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { Background } from '../../componentsAdm/Background';
import { borrowed } from '../../utils/borrowed';
import { Itens } from "../../componentsAdm/Itens";

import { BorrowedProducts } from "../../componentsAdm/BorrowedProducts";

export function EmprestadosAdm() {

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
                        <Text style={styles.title}>Emprestados</Text>
                    </View>
                    <View style={styles.containerFlat}>
                        <FlatList style={styles.FlatList} keyExtractor={item => item.id} data={borrowed} renderItem={({ item }) => (
                            <BorrowedProducts data={item} />
                        )} />
                    </View>       
                </View>
                <Itens />
            </View>
        </Background>
    );
}
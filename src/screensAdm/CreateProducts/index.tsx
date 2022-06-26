import React, { useState } from "react";

import { View, Text } from 'react-native';

import { FlatList, RectButton, ScrollView } from "react-native-gesture-handler";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { Background } from '../../componentsAdm/Background';
import SelectDropdown from 'react-native-select-dropdown'
import { Itens } from "../../componentsAdm/Itens";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { InputsImage } from "../../componentsAdm/InputsImage";
import { InputsText } from "../../componentsAdm/InputsText";
import { InputDescription } from "../../componentsAdm/InputDescription";
import { ButtonRefit } from "../../componentsAdm/ButtonRefit";
import { ButtonEntry } from "../../components/ButtonEntry";
import { ButtonDirection } from "../../componentsAdm/ButtonDirection";
import { DaysSelects } from "../../componentsAdm/DaysSelects";

export function CreateProducts() {
    const { primary, secondary } = theme.colors;
    const categories = ["Selecione a Categoria", "teste1", "teste2", "teste3", "teste4"];
    const [icon, setIcon] = useState(false)
    const [categorie, setCategorie] = useState(null)

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
                        <Text style={styles.title}>Adicionar Itens</Text>
                    </View>
                    <ScrollView >
                        <View style={styles.containerForm}>
                            <InputsImage/>
                            <InputsText placeholder="Digite o nome do item aqui" />
                            <SelectDropdown
                                defaultValue={categories[0]}
                                data={categories}
                                renderDropdownIcon={(icon) => (
                                    icon ?
                                        <MaterialIcons name="keyboard-arrow-up" size={24} color="#000" style={styles.icon} /> :
                                        <MaterialIcons name="keyboard-arrow-down" size={24} color="#000" style={styles.icon} />
                                )}

                                buttonStyle={{ ...styles.selectButton }}

                                buttonTextStyle={styles.selectTextButton}

                                rowTextStyle={styles.selectTextRow}

                                rowStyle={{ borderBottomWidth: 0 }}

                                dropdownStyle={styles.selectDropDown}

                                onSelect={(selectedItem, index) => {
                                    setCategorie(index + 1)
                                }}

                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />
                            <View style={styles.qntdContainer}>
                                <Text style={styles.textQtd}>
                                    Quantidade Total:
                                </Text>
                                <View style={styles.qtdButton}>
                                    <RectButton style={styles.decButton}>
                                        <AntDesign style={styles.buttonIcon} name="minuscircleo" />
                                    </RectButton>
                                    <Text style={styles.textQtdTotal}>1</Text>
                                    <RectButton style={styles.decButton}>
                                        <AntDesign style={styles.buttonIcon} name="pluscircleo" />
                                    </RectButton>
                                </View>
                            </View>

                            <DaysSelects/>

                            <InputDescription />
                            <RectButton style={styles.button} >
                                <LinearGradient
                                    style={styles.linear}
                                    colors={[primary, secondary]}
                                />
                                <Text style={styles.textButton}>
                                    ADICIONAR
                                </Text>
                            </RectButton>
                        </View>
                    </ScrollView>
                </View>

                <Itens />

            </View>

        </Background>
    );
}
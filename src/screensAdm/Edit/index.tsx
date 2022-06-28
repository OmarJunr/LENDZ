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

import { DaysSelects } from "../../componentsAdm/DaysSelects";

export function Edit({ route }) {
    const { primary, secondary } = theme.colors;
    const categories = ["Selecione a Categoria", "Eletronicos", "Agro", "Esportes", "Materias"];
    const [icon, setIcon] = useState(false)
    const [categorie, setCategorie] = useState(null)

    const navigation = useNavigation()
    const data = route.params.paramKey;
 
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
                        <Text style={styles.title}>Editar itens</Text>
                    </View>
                    <ScrollView >
                        <View style={styles.containerForm}>
                            <InputsImage image={data.icon}/>
                            <InputsText placeholder="Digite o nome do item aqui" title={data.title}/>
                            <SelectDropdown
                                defaultValue={categories[data.idCategorie]}
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
                                    <Text style={styles.textQtdTotal}>{data.dispo}</Text>
                                    <RectButton style={styles.decButton}>
                                        <AntDesign style={styles.buttonIcon} name="pluscircleo" />
                                    </RectButton>
                                </View>
                            </View>

                            <DaysSelects daySelected={data.id_day}/>

                            <InputDescription desc={data.desc}/>
                            <RectButton style={styles.button} >
                                <LinearGradient
                                    style={styles.linear}
                                    colors={[primary, secondary]}
                                />
                                <Text style={styles.textButton}>
                                    Editar
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
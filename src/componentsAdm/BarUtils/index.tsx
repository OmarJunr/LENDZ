import React, { useState } from "react";
import { Text, View, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { ModalView } from "../ModalView";
import { BarLeftAdm } from "../../screensAdm/BarLeftAdm";
import { PanGestureHandler } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";


export function BarUtils() {
    const [openMenuModal, setOpenMenuModal] = useState(false);
    const navigation = useNavigation()

    function ModalMinimaze() {
        setOpenMenuModal(false)
    }
    
    function HandleCarrinho() {
        //@ts-ignore
        navigation.navigate("Carrinho");
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.itens}>
                    <Feather name="menu" size={24} color="black"
                        onPress={() => {
                            setOpenMenuModal(!openMenuModal)
                        }}
                    />
                </View>
            </View>
            <View style={styles.diviser} />
            <ModalView visible={openMenuModal}
            >
                <BarLeftAdm ModalMinimaze={ModalMinimaze} />
            </ModalView>
        </>
    )
}
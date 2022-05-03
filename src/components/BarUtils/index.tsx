import React, { useState } from "react";
import { Text, View, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { ModalView } from "../ModalView";
import { BarLeft } from "../../screens/BarLeft";
import { PanGestureHandler } from 'react-native-gesture-handler';


export function BarUtils() {
    const [openMenuModal, setOpenMenuModal] = useState(false);

    function ModalMinimaze() {
        setOpenMenuModal(false)
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
                    <View style={styles.twoItens}>
                        <Feather name="bell" size={24} color="black" style={{ marginHorizontal: 10 }} />
                        <Feather name="shopping-cart" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.diviser} />
            <ModalView visible={openMenuModal}
            >
                <BarLeft ModalMinimaze={ModalMinimaze} />
            </ModalView>
        </>
    )
}
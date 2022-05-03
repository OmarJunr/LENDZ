import React from "react";

import {
    View, Text, ScrollView, KeyboardAvoidingView, Platform, Image
} from 'react-native';

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

export function Fila() {
    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <AntDesign
                    name="arrowleft"
                    color={theme.colors.black}
                    size={30}
                />
                <Text style={styles.title}>Fila de Empréstimos</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={foto1}
                    style={styles.image}
                />
            </View>
            <View style={styles.itemInfo}>
                <Text style={styles.font}>HD Externo</Text>
                <Text style={styles.disponivel}>Na fila de Empréstimo</Text>
                <View style={styles.qtdButtons}>
                    <AntDesign
                        name="minuscircleo"
                        color={"grey"}
                        size={20}
                    />
                    <Text style={styles.quantity}>2</Text>
                    <AntDesign
                        name="pluscircleo"
                        color={"grey"}
                        size={20}
                    />
                </View>
            </View>
            {/* <View style={styles.button}>
                <ButtonFila />
            </View> */}
        </View>
    );
}
import React from "react";

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

export function Fila() {
    
    const navigation = useNavigation()

    function Principal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <AntDesign
                    name="arrowleft"
                    color={theme.colors.black}
                    size={30}
                    onPress={Principal}
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
                    <RectButton>
                        <AntDesign
                            name="minuscircleo"
                            color={"grey"}
                            size={20}
                        />
                    </RectButton>
                    <Text style={styles.quantity}>2</Text>
                    <RectButton>
                        <AntDesign
                            name="pluscircleo"
                            color={"grey"}
                            size={20}
                        />
                    </RectButton>
                </View>
            </View>
        </View>
    );
}
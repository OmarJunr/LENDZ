import React from "react";

import {
    View, Text, ScrollView, KeyboardAvoidingView, Platform, Image, Pressable
} from 'react-native';

import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { Lines } from '../../components/Lines';
import { AntDesign } from '@expo/vector-icons'
import IllustrationImg from '../../assets/illustration.png';
import { theme } from '../../global/styles/theme';
import { Button } from "../../components/Button";
import { SmallInput } from "../../components/SmallInput";
import { ButtonVsu } from "../../components/ButtonVsu";
import { ButtonPassword } from "../../components/ButtonPassword";
import { Background } from "../../components/Background";

export function VerifyVsu() {
    const navigation = useNavigation()

    return (
        <Background>
            <View style={styles.container}>
                <View style={styles.separation}>
                    <View style={styles.cabecalho}>
                        <AntDesign
                            name="arrowleft"
                            color={theme.colors.heading}
                            size={30}
                            onPress={navigation.goBack}
                        />
                        <Image
                            source={IllustrationImg}
                            style={styles.image} resizeMode="stretch"
                        />
                    </View>
                    <Text style={styles.title}>
                        LENDZ
                    </Text>
                </View>
                <View style={styles.form}>

                    <View style={styles.TitleBox}>
                        <Lines />
                        <Text style={styles.label}>
                            VSU VERIFICAÇÃO
                        </Text>
                        <Lines />
                    </View>

                    <Text>
                        VSU FOI ENVIADO PARA (000) 0 0000-0000
                    </Text>

                    <View style={styles.field}>
                        <View>

                            <View style={styles.column}>
                                <SmallInput maxLength={2} />

                                <SmallInput maxLength={2} />

                                <SmallInput maxLength={2} />

                                <SmallInput maxLength={2} />
                            </View>
                        </View>

                    </View>
                    <ButtonPassword />
                    <View style={[{ flexDirection: 'row' }]}>
                        <Text style={[{ marginRight: 10, color: '#a7a7a7' }]}>
                            00:30
                        </Text>
                        <Pressable>
                            <Text>
                                Reenviar VSU
                            </Text>
                        </Pressable>
                    </View>

                </View>

            </View>
        </Background>

    );
}
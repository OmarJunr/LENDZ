import React from "react"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler"
import IllustrationImg from '../../assets/illustration.png';
import suporte from '../../assets/suporte.png';
import { Background } from "../../componentsAdm/Background"
import { Itens } from "../../componentsAdm/Itens"
import { alunos } from "../../utils/aluno"
import { Alunos } from "../../componentsAdm/Alunos"
export function SuporteAlunos() {
    const navigation = useNavigation()

    return (

        <Background>
            <View style={styles.container}>
                <View style={styles.screen}>
                    <AntDesign
                        name="arrowleft"
                        size={30}
                        color="#FFFFFF"
                        onPress={navigation.goBack}
                        style={styles.arrowleft}
                    />
                    <View style={styles.cabecalho}>
                        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />
                            <Text style={styles.title}>
                                Chat Com Aluno
                            </Text>
                    </View>
                    <View style={styles.subContainer}>

                        <FlatList style={styles.FlatList} keyExtractor={item => item.id} data={alunos} renderItem={({ item }) => (
                            <Alunos data={item} />
                        )} />

                    </View>
                </View>
                <Itens />
            </View>
        </Background >
    )
}
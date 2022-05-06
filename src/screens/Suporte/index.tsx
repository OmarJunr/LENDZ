import React from "react"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import IllustrationImg from '../../assets/illustration.png';
import suporte from '../../assets/suporte.png';
import { Background } from "../../components/Background"

export function Suporte() {
    const navigation = useNavigation()

    return (

        <Background>
            <ScrollView>
                <View style={styles.container}>

                    <AntDesign
                        name="arrowleft"
                        size={30}
                        color="#FFFFFF"
                        onPress={navigation.goBack}
                        style={styles.arrowleft}
                    />
                    <View style={styles.cabecalho}>
                        <Image source={IllustrationImg} style={styles.image} resizeMode="stretch" />
                        <View style={styles.textCabecalho}>
                            <Text style={styles.title}>
                                Olá!
                            </Text>
                            <Text style={styles.subtitle}>
                                Como podemos te ajudar!
                            </Text>
                        </View>
                    </View>

                    <View style={styles.subContainer}>

                        <View style={styles.perfilSup}>
                            <View style={styles.imageContainerSup}>
                                <Image source={suporte} style={styles.imageSup} resizeMode="stretch" />
                            </View>
                            <View style={styles.infoSup}>
                                <Text style={styles.nameSup}>
                                    Suporte
                                </Text>
                                <Text style={styles.timeSup}>
                                    2M Ago
                                </Text>
                            </View>
                        </View>

                        <ScrollView style={styles.scrollView}>
                            <View style={styles.recebido}>
                                <Text style={styles.textConversa}>
                                    Olá,
                                </Text>
                                <Text style={styles.textConversa}>
                                    Há algo que podemos ajudar você hoje?
                                </Text>
                            </View>
                            <View style={styles.enviado}>
                                <Text style={styles.textResposta}>
                                    Olá Suporte,
                                </Text>

                            </View>
                            <View style={styles.enviado}>
                                <Text style={styles.textResposta}>
                                    Quantos dias faltam para liberarem os HD Externos
                                </Text>
                            </View>
                            <View style={styles.recebido}>
                                <Text style={styles.textConversa}>
                                    Olá,
                                </Text>
                                <Text style={styles.textConversa}>
                                    Há algo que podemos ajudar você hoje?
                                </Text>
                            </View>
                            <View style={styles.enviado}>
                                <Text style={styles.textResposta}>
                                    Olá Suporte,
                                </Text>

                            </View>
                            <View style={styles.enviado}>
                                <Text style={styles.textResposta}>
                                    Quantos dias faltam para liberarem os HD Externos
                                </Text>
                            </View>
                            <View style={styles.recebido}>
                                <Text style={styles.textConversa}>
                                    Olá,
                                </Text>
                                <Text style={styles.textConversa}>
                                    Há algo que podemos ajudar você hoje?
                                </Text>
                            </View>
                            <View style={styles.enviado}>
                                <Text style={styles.textResposta}>
                                    Olá Suporte,
                                </Text>

                            </View>
                            <View style={styles.enviado}>
                                <Text style={styles.textResposta}>
                                    Quantos dias faltam para liberarem os HD Externos
                                </Text>
                            </View>
                        </ScrollView>

                        <View style={styles.input}>
                            <TextInput
                                placeholder="Digite sua mensagem..."
                            />

                            <View style={styles.iconsCategory}>
                                <Feather name="smile" size={24} color="black" style={styles.icons} />
                                <Feather name="image" size={24} color="black" style={styles.icons} />
                                <Feather name="paperclip" size={24} color="black" style={styles.icons} />
                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </Background >

    )
}
import React from "react"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import IllustrationImg from '../../assets/illustration.png';
import suporte from '../../assets/suporte.png';
import { Background } from "../../componentsAdm/Background"
import { Itens } from "../../componentsAdm/Itens"

export function SuporteAdm({ route }) {
    const navigation = useNavigation()
    const data = route.params.paramKey;
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
                        <View style={styles.textCabecalho}>
                            <Text style={styles.title}>
                                Chat Com Aluno!
                            </Text>
                            <Text style={styles.subtitle}>
                                {data.title}
                            </Text>
                            <Text style={styles.subtitle}>
                                {data.email}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.subContainer}>

                        <View style={styles.perfilSup}>
                            <View style={styles.imageContainerSup}>
                                <Image source={data.icon} style={styles.imageSup} resizeMode="stretch" />
                            </View>
                            <View style={styles.infoSup}>
                                <Text style={styles.nameSup}>
                                    Aluno(a) - {data.title}
                                </Text>
                                <Text style={styles.timeSup}>
                                    2M Ago
                                </Text>
                            </View>
                        </View>

                        <ScrollView style={styles.scrollView}>
                            <View style={styles.recebido}>
                                <Text style={styles.textConversa}>
                                    Olá Suporte
                                </Text>

                            </View>
                            <View style={styles.enviado}>
                                <Text style={styles.textResposta}>
                                    Olá {data.title}, em que podemos ajudar voce hoje
                                </Text>

                            </View>
                            <View style={styles.recebido}>
                                <Text style={styles.textConversa}>
                                    Quantos dias faltam para liberarem os HD Externos
                                </Text>
                            </View>
                            <View style={styles.enviado}>
                                <Text style={styles.textResposta}>
                                    Daqui a 3 dias {data.title}
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
                <Itens />
            </View>
        </Background >
    )
}
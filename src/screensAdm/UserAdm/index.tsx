import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { adm } from '../../utils/adm';
import { RectButton } from "react-native-gesture-handler"
import { Itens } from "../../componentsAdm/Itens"
import { Background } from "../../componentsAdm/Background"

export function UserAdm() {
    const navigation = useNavigation()

    function handleSolicitacao() {
        //@ts-ignore
        navigation.navigate("SolicitacaoPendetes");
    }
    function handleRetirada() {
        //@ts-ignore
        navigation.navigate("LocalRetiradaAdm");
    }
    function handleSair() {
        //@ts-ignore
        navigation.navigate("SignIn");
    }
    function handleSuporte() {
        //@ts-ignore
        navigation.navigate("SuporteAlunos")
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.screen}>
                    <View style={styles.header}>
                        <Text style={styles.my_account}>Minha Conta</Text>
                    </View>

                    <SafeAreaView
                        style={styles.info_container}
                    >
                        {
                            adm.map((users, i) => (
                                <View key={i} style={styles.info}>
                                    <View >
                                        <ImageBackground source={users.icon} style={styles.photo} />
                                    </View>
                                    <Text style={styles.user_name}>
                                        {users.title}
                                    </Text>
                                    <Text style={styles.email}>
                                        {users.email}
                                    </Text>

                                </View>
                            ))
                        }

                    </SafeAreaView>

                    <View style={styles.menu_container}>

                        <View style={styles.menu_item}>
                            <RectButton style={{ flexDirection: 'row', width: '100%' }} onPress={handleSolicitacao}>
                                <Feather style={styles.menu_icon} name={'box'} />
                                <Text style={styles.menu_text}>Solicitações pendentes</Text>
                            </RectButton>
                        </View>

                        <View style={styles.menu_item} >
                            <RectButton style={{ flexDirection: 'row', width: '100%' }} onPress={handleRetirada}>
                                <Feather style={styles.menu_icon} name={"map-pin"} />
                                <Text style={styles.menu_text}>Local de Retirada</Text>
                            </RectButton>
                        </View>
                        <View style={styles.menu_item}>
                            <RectButton style={{ flexDirection: 'row', width: '100%' }} onPress={handleSuporte} >
                                <Feather name='message-circle' style={styles.menu_icon} />
                                <Text style={styles.menu_text} >Chat com o Aluno</Text>
                            </RectButton>
                        </View>
                        <View style={styles.menu_item}>
                            <RectButton style={{ flexDirection: 'row', width: '100%' }} onPress={handleSair} >
                                <Feather style={styles.menu_icon} name={"arrow-left"} />
                                <Text style={styles.menu_text} >Sair da Conta</Text>
                            </RectButton>
                        </View>
                    </View>
                </View>
                <Itens IconSelected="User" />
            </SafeAreaView>
        </Background>
    )
}
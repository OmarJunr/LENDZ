import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { user } from '../../utils/user';
import { RectButton } from "react-native-gesture-handler"
import { Itens } from "../../components/Itens"
import { Background } from "../../components/Background"

export function UserProfile() {
    const navigation = useNavigation()

    function handleFila() {
        //@ts-ignore
        navigation.navigate("Fila");
    }
    function handleRetirada() {
        //@ts-ignore
        navigation.navigate("LocalRetirada");
    }
    function handleSair() {
        //@ts-ignore
        navigation.navigate("SignIn");
    }
    function handleSuporte() {
        //@ts-ignore
        navigation.navigate("Suporte")
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
                            user.map((users, i) => (
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
                                    <RectButton style={styles.buttonEdit}>
                                        <Text style={styles.textEdit}>
                                            Editar Perfil
                                        </Text>
                                    </RectButton>
                                </View>
                            ))
                        }

                    </SafeAreaView>

                    <View style={styles.menu_container}>

                        <View style={styles.menu_item}>
                            <RectButton style={{ flexDirection: 'row', width: '100%' }} onPress={handleFila}>
                                <Feather style={styles.menu_icon} name={'box'} />
                                <Text style={styles.menu_text}>Esperando na Fila</Text>
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
                                <Text style={styles.menu_text} >Chat com o Suporte</Text>
                            </RectButton>
                        </View>
                        <View style={styles.menu_item}>
                            <RectButton style={{ flexDirection: 'row', width: '100%' }} onPress={handleSuporte} >
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
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { user } from '../../utils/user';
import { RectButton } from "react-native-gesture-handler"

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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <AntDesign
                    name="arrowleft"
                    size={30}
                    color="#FFFFFF"
                    onPress={navigation.goBack} />
                <Text style={styles.my_account}>Minha Conta</Text>
            </View>

            <SafeAreaView
                style={styles.info_container}
            >
                {
                    user.map((users, i) => (
                        <View key={i} >
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
                    <RectButton style={{ flexDirection: 'row', width: '100%' }} onPress={handleSair} >
                        <Feather style={styles.menu_icon} name={"arrow-left"} />
                        <Text style={styles.menu_text} >Sair da Conta</Text>
                    </RectButton>
                </View>

            </View>
        </SafeAreaView>
    )
}
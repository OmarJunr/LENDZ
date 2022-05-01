import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"


export function UserProfile() {
    const navigation = useNavigation()

    const menuItens = [
        {
            icon: "box",
            description: "Esperando na Fila"
        },
        {
            icon: "map-pin",
            description: "Local de Retirada"
        },
        {
            icon: "arrow-left",
            description: "Sair da Conta"
        }
    ]

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
                <View style={styles.info_container}>
                    <View style={styles.photo}></View>
                    <Text style={styles.user_name}>Usuário</Text>
                    <Text style={styles.email}>usuario@gmail.com</Text>
                </View>
                <View style={styles.menu_container}>
                        {
                            menuItens.map((item) => (
                                <View style={styles.menu_item}>
                                    <Feather style={styles.menu_icon} name={item.icon} />
                                    <Text style={styles.menu_text}>{item.description}</Text>
                                </View>
                            ))
                        }
                    </View>
        </SafeAreaView>
    )
}
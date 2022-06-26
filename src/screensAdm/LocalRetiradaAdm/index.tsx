import React from "react"
import { View, Image, Text, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import map from "../../../assets/localretirada/local_retirada_maps.png"
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import { RectButton } from "react-native-gesture-handler"

export function LocalRetiradaAdm() {
    const navigation = useNavigation()

    function handlePrincipal() {
        //@ts-ignore
        navigation.navigate("PrincipalAdm");
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <AntDesign
                    name="arrowleft"
                    size={30}
                    color="#000000"
                    style={{ marginRight: 8 }}
                    onPress={navigation.goBack} />
                <Text style={styles.local_retirada_text}>Local Para Retirada</Text>
            </View>
            <View style={styles.middle_container}>
                <Text style={styles.title}>Sala da Coordenação</Text>
                <View style={{marginVertical:10}}>
                <Text style={styles.subtitle}>Estr. p/ Boa Esperança, km 04 - Zona Rural</Text>
                <Text style={styles.subtitle}>Dois Vizinhos - PR, 85660-000</Text>
                <Text style={styles.subtitle}>Bloco 1 - Sala 1</Text>
                </View>
                <Image
                    style={styles.image}
                    source={map} />

            </View>
            <View style={styles.bottom_container}>
                <Text style={styles.local_retirada_text}>ITENS EM POSSE</Text>
                <Text style={styles.number}>
                    2
                </Text>
                <Pressable style={styles.voltar} onPress={handlePrincipal}>
                    <Text style={styles.voltarText}>
                        VOLTAR PARA TELA PRINCIPAL
                    </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
import React from "react"
import { View, Image, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import map from "../../../assets/localretirada/local_retirada_maps.png"
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import { RectButton } from "react-native-gesture-handler"

export function LocalRetirada() {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <AntDesign
                    name="arrowleft"
                    size={30}
                    color="#000000"
                    style={{marginRight: 8}}
                    onPress={navigation.goBack} />
                <Text style={styles.local_retirada_text}>Local Para Retirada</Text>
            </View>
            <View style={styles.middle_container}>
                <Text style={styles.title}>Sala da Coordenação</Text>
                <Text style={styles.subtitle}>Estr. p/ Boa Esperança, km 04 - Zona Rural</Text>
                <Text style={styles.subtitle}>Dois Vizinhos - PR, 85660-000</Text>
                <Text style={styles.subtitle}>Bloco 1 - Sala 1</Text>
                <Image
                    style={styles.image} 
                    source={map}/>
                <View style={styles.bottom_container}>
                    <Text style={styles.local_retirada_text}>ITENS EM POSSE</Text>
                    <RectButton style={styles.voltar} onPress={() => navigation.goBack}>
                        <AntDesign name="arrowleft" style={styles.voltar_button} />
                        <Text style={styles.voltar_text}>VOLTAR</Text>
                    </RectButton>
                </View>
            </View>
        </SafeAreaView>
    )
}
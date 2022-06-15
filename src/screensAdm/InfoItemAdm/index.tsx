import React, { useState } from "react"
import { View, Text, Image, Pressable } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import { Itens } from "../../components/Itens"
import { Background } from "../../components/Background"

export function InfoItemAdm({ route }) {
    const navigation = useNavigation()
    const data = route.params.paramKey;
    const [teste, setteste] = useState(true)


    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.screen}>
                    <View style={styles.header}>
                        <AntDesign
                            name="arrowleft"
                            size={30}
                            onPress={navigation.goBack} />
                    </View>
                    <Image
                        style={styles.image}
                        source={data.icon} />
                    <View style={styles.product_info_container}>
                        <Text style={styles.name} numberOfLines={2}>
                            {data.title}
                        </Text>
                        <View style={styles.empty_block}></View>
                        <Text style={isAvailable(data) ? styles.available : styles.unavailable}>
                            {getAvailabilityText(data)}
                        </Text>
                    </View>
                    <View style={styles.info_container}>
                        <View style={styles.containerTitle}>
                            <Text style={styles.textTitle}>
                                Descrição
                            </Text>
                        </View>
                        <Text style={styles.textDesc}>
                            {data.desc}
                        </Text>
                    </View>

                    <View style={styles.bottom_view}>
                        <Text style={styles.available_products}>
                            Produtos disponíveis: {data.dispo}
                        </Text>
                        <View style={styles.button_container}>
                            <View style={styles.qntd_button_container}>
                                <RectButton style={styles.dec_button}>
                                    <AntDesign style={styles.button_icon} name="minuscircleo" />
                                </RectButton>
                                <Text style={styles.qtd_text}>{data.emprestados}</Text>

                            </View>
                            <View style={styles.devolvido} >
                                <Text style={styles.add_text}>DEVOLVIDO</Text>
                                <AntDesign name="check" style={styles.shop_button} />
                            </View>
                        </View>
                    </View>

                </View>
                <Itens />
            </SafeAreaView>
        </Background>
    )
}


function isAvailable(data) {
    return data.dispo > 0
}

function getAvailabilityText(data) {
    if (isAvailable(data)) {
        return "Disponível"
    } else {
        return "Indisponível"
    }
}
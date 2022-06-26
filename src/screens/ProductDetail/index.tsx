import React, { useState } from "react"
import { View, Text, Image, Pressable } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import { Itens } from "../../components/Itens"
import { Background } from "../../components/Background"

export function ProductDetail({ route }) {
    const navigation = useNavigation()
    const data = route.params.paramKey;
    const [bool, setbool] = useState(true)


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
                        source={{uri: data.icon}} />
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
                        <Pressable onPress={() => setbool(!bool)}>
                            <Text style={bool ? styles.titleInfoEnable : styles.titleInfo}>
                                Descrição
                            </Text>
                       
                        </Pressable>

                        <Pressable onPress={() => setbool(!bool)}>
                            <Text style={bool ? styles.titleInfo : styles.titleInfoEnable}>
                                Politicas
                            </Text>
                           
                        </Pressable>

                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                        <View style={bool ? styles.barEnable : styles.barDisable} />
                        <View style={bool ? styles.barDisable : styles.barEnable} />
                    </View>
                    <View style={styles.textInfo}>
                        <Text style={bool ? { display: 'flex' } : { display: 'none' }}>
                            {data.description}
                        </Text>
                        <Text style={bool ? { display: 'none' } : { display: 'flex' }}>
                            {data.politcs}
                        </Text>
                    </View>
                    <View style={styles.bottom_view}>
                        <Text style={styles.available_products}>
                            Produtos disponíveis: {data.quant}
                        </Text>
                        <View style={styles.button_container}>
                            <View style={styles.qntd_button_container}>
                                <RectButton style={styles.dec_button}>
                                    <AntDesign style={styles.button_icon} name="minuscircleo" />
                                </RectButton>
                                <Text style={styles.qtd_text}>1</Text>
                                <RectButton style={styles.inc_button}>
                                    <AntDesign style={styles.button_icon} name="pluscircleo" />
                                </RectButton>
                            </View>
                            <RectButton style={styles.add_button}>
                                <Text style={styles.add_text}>ADICIONAR</Text>
                                <AntDesign name="shoppingcart" style={styles.shop_button} />
                            </RectButton>
                        </View>
                    </View>

                </View>
                <Itens />
            </SafeAreaView>
        </Background>
    )
}


function isAvailable(data) {
    return data.quant > 0
}

function getAvailabilityText(data) {
    if (isAvailable(data)) {
        return "Disponível"
    } else {
        return "Indisponível"
    }
}
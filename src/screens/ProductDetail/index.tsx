import React from "react"
import { View, Text, Image } from "react-native"
import { RectButton, ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import { Button } from "../../components/Button"

export function ProductDetail() {
    const product = fetchProduct()
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <AntDesign
                        name="arrowleft"
                        size={30}
                        onPress={navigation.goBack} />
                </View>
                <Image
                    style={styles.image}
                    source={{uri: product.image}} />
                <View style={styles.product_info_container}>
                    <Text style={styles.name} numberOfLines={2}>
                        {product.name}
                    </Text>
                    <View style={styles.empty_block}></View>
                    <Text style={isAvailable(product) ? styles.available : styles.unavailable}>
                        {getAvailabilityText(product)}
                    </Text>
                </View>
                <View style={styles.info_container}>
                    <Text style={styles.info_title}>
                        Descrição
                    </Text>
                    <Text style={styles.info_description}>
                        {product.description}
                    </Text>
                </View>
                <View style={styles.info_container}>
                    <Text style={styles.info_title}>
                        Políticas
                    </Text>
                    <Text style={styles.info_description}>
                        {product.politics}
                    </Text>
                </View>
                <View style={styles.bottom_view}>
                    <Text style={styles.available_products}>
                        Produtos disponíveis: {product.available_quantity}
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
        </SafeAreaView>
    )
}

function fetchProduct() {
    return {
        name: "Pendrive",
        description: "Pendrive 16GB",
        image: "https://m.media-amazon.com/images/I/51oXPTsEXlL._AC_SY450_.jpg",
        available_quantity: 10,
        politics: "7 dias devolução"
    }
}

function isAvailable(product) {
    return product.available_quantity > 0
}

function getAvailabilityText(product) {
    if (isAvailable(product)) {
        return "Disponível"
    } else {
        return "Indisponível"
    }
}
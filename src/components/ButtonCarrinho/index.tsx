import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";
import db from "../../database/database";
import { get, off, onValue, ref, update } from "firebase/database";
import { products } from "../../utils/products";
import { getKey } from "../../utils/saveId";


export function ButtonCarrinho() {

    const navigation = useNavigation()

    // function handleSolicitar() {
    //         //@ts-ignore
    //         navigation.navigate("Solicitacao");
    // }

    function handleSolicitar() {
        if (products.length > 0) {
                update(ref(db, '/solicitacao/' + getKey() + '/solicitacao_id/'), {
                    produtos: products
                })
                // update(ref(db, '/products/'), {
                    //alterarquantidade
                // })

                //@ts-ignore
                navigation.navigate("Solicitacao");
            }
        }

    if (products.length <= 0){
        return (
            <Text style={styles.vazio}>
                O seu carrinho está vazio!
            </Text>
        );
    } else
    return (
        <RectButton
            style={styles.container}
            onPress={handleSolicitar}
        >
            <View style={styles.espacamento}>
                <Text style={styles.title}>
                    SOLICITAR
                </Text>
                <AntDesign
                    name="arrowright"
                    color={theme.colors.white}
                    size={30}
                />
            </View>
        </RectButton>
    )
}
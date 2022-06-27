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


function validateSolicitados() {
    if (products.length > 0) {
        get(ref(db, '/user')).then(users => {
            console.log(users)
            let highestId = "0"
            let can = true
            users.forEach((usera) => {
                const user = usera.val()
                if (parseInt(usera.key) >= parseInt(highestId)) {
                    highestId = (parseInt(usera.key) + 1).toString()
                }
                if (user && user.email == email) {
                    can = false
                    return
                }
            })
            if (!can) return
            update(ref(db, '/user/' + highestId), {
                name: nome,
                email: email,
                phone: phone,
                password: password
            })
            //@ts-ignore
            navigation.navigate("Principal");
        })
    }
}

export function ButtonCarrinho() {

    const navigation = useNavigation()

    function handleSolicitar() {
            //@ts-ignore
            navigation.navigate("Solicitacao");
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
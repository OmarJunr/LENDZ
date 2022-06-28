import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";
import db from "../../database/database"
import { get, onValue, ref, update } from "firebase/database";
import { setKey } from "../../utils/saveId";

export function ButtonPrincipal({getCredentials}) {
    const navigation = useNavigation()
    const { primary, secondary } = theme.colors;

    function Principal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }
    async function validateCredentials() {
        const credentials = getCredentials()
        get(ref(db, '/user')).then(usersList => {
            usersList.forEach((user) => {
                if (user && user.val().email == credentials.username && user.val().password == credentials.password) {
                    Principal()
                }
                setKey(user.key)
            })
        })
    }
    return (
        <RectButton
            style={styles.container}
            onPress={validateCredentials}
        >
            <LinearGradient
                style={styles.linear}
                colors={[primary, secondary]}
            />
            <Text style={styles.title}>
                Entrar
            </Text>
        </RectButton>

    )
}
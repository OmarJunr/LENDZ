import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";
import db from "../../database/database"
import { onValue, ref, update } from "firebase/database";

export function ButtonPrincipal({getCredentials}) {
    const navigation = useNavigation()
    const { primary, secondary } = theme.colors;

    function Principal() {
        //@ts-ignore
        navigation.navigate("Principal");
    }
    async function validateCredentials() {
        const credentials = getCredentials()
        onValue(ref(db, '/login'), usersList => {
            for(let i = 0; i < usersList.val().length; i++) {
                const current = usersList.val()[i]
                if (current && current.username == credentials.username && current.password == credentials.password) {
                    Principal()
                }
            }
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
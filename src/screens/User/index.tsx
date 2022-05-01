import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons'
import { View, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"


export function UserProfile() {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
                <View style={styles.header}>
                    <AntDesign
                        name="arrowleft"
                        size={30}
                        onPress={navigation.goBack} />
                    <Text style={styles.my_account}>Minha Conta</Text>
                </View>
        </SafeAreaView>
    )
}
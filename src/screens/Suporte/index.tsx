import React from "react"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import IllustrationImg from '../../assets/illustration.png';
import suporte from '../../assets/suporte.png';

export function Suporte() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <AntDesign
                name="arrowleft"
                size={30}
                color="#FFFFFF"
                onPress={navigation.goBack} />
            <View>
                <Image source={IllustrationImg} />
                <Text>
                    Olá!
                </Text>
                <Text>
                    como podemos te ajudar!
                </Text>
            </View>
            <View>
                <View>
                    <View>
                        <Image source={suporte} />
                    </View>
                    <Text>
                        Suporte
                    </Text>
                    <Text>
                        2M Ago
                    </Text>
                </View>
                <ScrollView>

                </ScrollView>
                <View style={styles.input}>
                    <TextInput
                        placeholder="Digite sua mensagem..."
                    />
                    <Feather name="smile" size={24} color="black" />
                    <Feather name="image" size={24} color="black" />
                    <Feather name="paperclip" size={24} color="black" />

                </View>
            </View>
        </View>
    )
}
import React from "react"
import { styles } from "./styles"
import { AntDesign, Feather } from '@expo/vector-icons'
import { View, Text,Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ScrollView } from "react-native-gesture-handler"
import IllustrationImg from '../../assets/illustration.png';

export function Suporte() {
    const navigation = useNavigation()

    return (
        <View>
            <AntDesign
                name="arrowleft"
                size={30}
                color="#FFFFFF"
                onPress={navigation.goBack} />
                <View>
                    <Image source={IllustrationImg}/>
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

                        </View>
                        <Text>

                        </Text>
                        <Text>

                        </Text>
                    </View>
                    <ScrollView>

                    </ScrollView>
                    <View>
                        
                    </View>
                </View>
        </View>
    )
}
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Text} from 'react-native';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from "../../global/styles/theme";


export function ButtonPassword() {
    const { primary, secondary } = theme.colors;
    const navigation = useNavigation()

    function HandlePassworld() {
        //@ts-ignore
        navigation.navigate("Password");
    }

    return (
        <RectButton style={styles.container} onPress={HandlePassworld}>
        <LinearGradient
            style={styles.linear}
            colors={[primary, secondary]}
        />
        <Text style={styles.title}>
        VERIFICAR
        </Text>
    </RectButton>
      
    )
}
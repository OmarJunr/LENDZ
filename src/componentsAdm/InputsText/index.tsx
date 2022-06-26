import React from "react";

import { TextInput, View, Text } from 'react-native';
import { theme } from "../../global/styles/theme";

import { styles } from './styles';

type Props = {

    placeholder: string
}

export function InputsText({ placeholder, ...rest }: Props) {
    return (

        <View style={styles.container}>
            <View style={styles.input}>
                <TextInput
                
                    placeholder={placeholder}
                    style={styles.text}
                    keyboardType='default'
                />
            </View>
        </View>


    )

}
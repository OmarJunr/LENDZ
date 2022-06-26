import React from "react";

import { TextInput, View, Text } from 'react-native';

import { styles } from './styles';

type Props={
    title:string;
    placeholder:string
}

export function InputsText({title,placeholder,setText = null}) {
    return (
        
        <View style={styles.container}>
            <View style={styles.input}>
                <View style={styles.labels}>
                    <Text>{title}</Text>
                    <TextInput
                        placeholder={placeholder}
                        keyboardType='default'
                        onChangeText={(text) => { 
                            if (setText) setText(text)
                         }}
                    />
                </View>
            </View>
        </View>

    )

}
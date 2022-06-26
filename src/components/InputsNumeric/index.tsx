import React from "react";

import { TextInput, View, Text } from 'react-native';

import { styles } from './styles';

type Props={
    title:string;
    placeholder:string
}

export function InputsNumeric({title,placeholder,setNumber=null}) {
    return (
        
        <View style={styles.container}>
            <View style={styles.input}>
                <View style={styles.labels}>
                    <Text>{title}</Text>
                    <TextInput
                        placeholder={placeholder}
                        keyboardType='numeric'
                        onChangeText={(text) => {
                            if (setNumber) setNumber(text)
                        }}
                    />
                </View>
            </View>
        </View>

    )

}
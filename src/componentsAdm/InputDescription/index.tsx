import React from "react";

import { TextInput, View } from 'react-native';

import { styles } from './styles';

type Props = {
    desc?:string
}

export function InputDescription({desc}:Props) {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <View style={styles.labels}>
                    <TextInput
                        multiline
                        textAlignVertical="top"
                        numberOfLines={10}
                        placeholder='Descrição...'
                        keyboardType='default'
                        placeholderTextColor="black"
                        style={[{ color: '#000' }]}
                        defaultValue={desc}
                    />
                </View>
            </View>
        </View>
    )

}
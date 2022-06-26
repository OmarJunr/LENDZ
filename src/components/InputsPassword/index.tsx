import React from "react";
import { useState } from "react";
import { RectButton, State } from "react-native-gesture-handler";

import { TextInput, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { styles } from './styles';

type Props = {
    title: string;
    placeholder: string;
}

export function InputsPassword({ title, placeholder, setText = null}) {
    const [eyes, setEyes] = useState(true);

    return (

        <View style={styles.container}>
            <View style={styles.input}>
                <View style={styles.labels}>
                    <Text>{title}</Text>
                    <TextInput
                        placeholder={placeholder}
                        secureTextEntry={eyes}
                        onChangeText={(text) => {
                            if (setText) setText(text)
                        }}
                    />
                </View>
                <RectButton
                    style={styles.eyes}
                    onPress={() => {
                        setEyes(!eyes)
                    }}
                >
                    <View>
                        <Feather
                            name={eyes ? 'eye-off' : "eye"}
                            size={20}
                            color='#bfc6d5'
                        />
                    </View>
                </RectButton>
            </View>
        </View>

    )

}
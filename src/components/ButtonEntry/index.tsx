import React, { useState } from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, Modal } from 'react-native';
import { ModelView } from "../ModelView";

import { styles } from './styles';



export function ButtonEntry() {

    return (

            <RectButton
                style={styles.container}
            >
                <Text style={styles.title}>
                    ENTRAR
                </Text>
            </RectButton>
    )
}
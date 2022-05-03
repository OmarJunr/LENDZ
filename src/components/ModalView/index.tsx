import React, { ReactNode, useState } from "react";

import { View, Modal, ModalProps, Text, Pressable } from "react-native";

import { styles } from './styles';

type Props = ModalProps & {
    children: ReactNode
}

export function ModalView({ children, ...rest }: Props) {

    return (
        <Modal
            transparent
            {...rest}
        >
            <View style={styles.container}>
                {children}
            </View>
        </Modal >
    )
}
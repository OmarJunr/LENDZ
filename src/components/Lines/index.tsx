import React, { ReactNode, useState } from "react";

import { View, Modal, Text, Pressable, ModalProps } from 'react-native';

import { styles } from './styles';

type Props = {
    tam?: string
}

export function Lines({ tam }: Props) {
    return (
        <View style={[styles.container, { width: tam ? tam : '30%' }]} />
    )
}
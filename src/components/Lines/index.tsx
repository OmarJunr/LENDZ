import React from "react";

import { View } from 'react-native';

import { styles } from './styles';

type Props = {
    tam?: string
}

export function Lines({ tam }: Props) {
    return (
        <View style={[styles.container, { width: tam ? tam : '30%' }]} />
    )
}
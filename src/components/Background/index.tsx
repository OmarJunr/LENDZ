import React, { ReactNode } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";
import { theme } from '../../global/styles/theme';

type Props = {
    children: ReactNode;
}

export function Background({ children }: Props) {
    const { primary } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[primary, primary]}
        >
            {children}
        </LinearGradient>
    )
}
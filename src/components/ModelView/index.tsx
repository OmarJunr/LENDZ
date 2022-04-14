import React, { ReactNode, useState } from "react";

import { View, Modal, Text, Pressable, ModalProps } from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
    children: ReactNode
}

export function ModelView({ children, ...rest }: Props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            {...rest}
        >
            <View style={styles.container} />
            {children}
        </Modal>
    )

}
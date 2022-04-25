import React, { useState } from "react";
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';
import { request } from '../../utils/request';
import { Feather } from '@expo/vector-icons';

type Props = {
    requestSelected: string;
    setRequest: (categoryId: string) => void;
}

export function RequestSelect({ requestSelected, setRequest }: Props) {
    return (
        <>
            <ScrollView
                horizontal
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 40 }}
            >
                {
                    request.map((request, i) => (
                        <RectButton key={i}
                            onPress={() => setRequest(request.id)}
                        >
                            <View
                                style={[styles.interno, { opacity: request.id === requestSelected ? 1 : 0.8 }]}
                            >
                                <View style={[styles.content, { elevation: request.id === requestSelected ? 1 : 0 }]}>
                                    <ImageBackground source={request.icon} style={styles.imageContainer} />
                                </View>
                                <Text style={styles.title}>
                                    {request.title}
                                </Text>
                                <View style={styles.status}>
                                    <Text>
                                        {request.status}
                                    </Text>
                                    <View style={styles.cart}>
                                        <Feather name="shopping-cart" size={15} color="#61A5C2" />
                                    </View>
                                </View>
                            </View>
                        </RectButton>
                    ))
                }
            </ScrollView>
        </>
    )
}
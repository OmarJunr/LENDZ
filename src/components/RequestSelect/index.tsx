import React, { useState } from "react";
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';
import { request } from '../../utils/request';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    requestSelected: string;
    setRequest: (categoryId: string) => void;
}

export function RequestSelect({ requestSelected, setRequest }: Props) {
    const navigation = useNavigation()
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
                            onPress={() => {[setRequest(request.id),
                                navigation.navigate('ProductDetail', {
                                    paramKey: request,
                                })
                            ]
                        }}>
                            
                        
                            <View
                                style={[styles.interno,  request.id === requestSelected ? styles.checked : styles.check]}
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
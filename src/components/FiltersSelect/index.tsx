import React, { useState } from "react";
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';
import { filters } from '../../utils/filters';


type Props = {
    filterSelected?: string;
    setFilter?: (filterId: string) => void;
}

export function FiltersSelect({ filterSelected, setFilter }: Props) {
    return (
        <>
            <ScrollView
                horizontal
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 40 }}
            >
                {
                    filters.map((filters, i) => (
                        <RectButton key={i}
                            onPress={() => setFilter(filters.id)}
                        >
                            <View
                                style={[styles.interno, { backgroundColor: filters.id === filterSelected ? '#2a6f97' : '#e1e1e1' }]}
                            >
                                <Text style={[styles.title, { color: filters.id === filterSelected ? 'white' : 'black' }]}>
                                    {filters.title}
                                </Text>
                            </View>
                        </RectButton>
                    ))
                }
            </ScrollView>
        </>
    )
}
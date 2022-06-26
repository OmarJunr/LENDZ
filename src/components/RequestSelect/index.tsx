import React, { useState } from "react";
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';
import { request } from '../../utils/request';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createRef } from "react";
import { useRef } from "react";
import { get, ref, update } from "firebase/database";
import db from "../../database/database";
import { useEffect } from "react";

type Props = {
    requestSelected: string;
    setRequest: (categoryId: string) => void;
}

export function RequestSelect({ requestSelected, setRequest }: Props) {
    const navigation = useNavigation()
    const [products, setProducts] = useState(null)

    async function fetch() {
        get(ref(db, '/products')).then((rproducts) => {
            if (rproducts && rproducts.val()) {
                setProducts(rproducts.val())
            } else {
                setProducts([])
            }
        })
    }

    useEffect(() => {
        fetch()
    })
    function filterList(product) {
        return product.top
    }

    return (
        <>
            <ScrollView
                horizontal
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 40 }}
                
            >
                {
                    products && products.filter(filterList).map((request, i) => (
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
                                    <ImageBackground source={{uri: request.icon}} style={styles.imageContainer} />
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
import React, { useState } from "react";
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { get, ref } from "firebase/database";
import { useEffect } from "react";
import db from "../../database/database";


type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
}

export function CategorySelect({ categorySelected, setCategory}: Props) {
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

    return (
        <>
            <ScrollView
                horizontal
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 40 }}
            >
                {
                    products && products.map((category, i) => (
                        <RectButton key={i}
                            onPress={() => {[
                                setCategory(category.id),
                                navigation.navigate('ProductDetail', {
                                    paramKey: category,
                                })
                            ]
                        }}>
                        
                            <View
                                style={[styles.interno, category.id === categorySelected ? styles.checked : styles.check]}
                            >
                                <View style={[styles.content, { elevation: category.id === categorySelected ? 1 : 0 }]}>
                                    <ImageBackground source={{uri: category.icon}} style={styles.imageContainer} />
                                </View>
                                <Text style={styles.title}>
                                    {category.title}
                                </Text>
                                <View style={styles.status}>
                                    <Text>
                                        {category.status}
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
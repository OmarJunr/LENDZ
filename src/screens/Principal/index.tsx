import React, { useState } from "react";
import { View, Text, Pressable, FlatList } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { BarUtils } from "../../components/BarUtils";
import { Itens } from "../../components/Itens";
import { Lines } from "../../components/Lines";
import { Search } from "../../components/Search";
import { styles } from "./styles";

import { CategorySelect } from "../../components/CategorySelect";
import { RequestSelect } from "../../components/RequestSelect";
import { FiltersSelect } from "../../components/FiltersSelect";
import { useNavigation } from "@react-navigation/native";

export function Principal() {
    const [category, setCategory] = useState('')
    const [request, setRequest] = useState('')
    const [filter, setFilter] = useState('')
    const navigation = useNavigation()

    return (

        <Background>
            <BarUtils />
                <View style={styles.container}>
                    <View style={styles.screen}>

                        <Search />
                        <View style={styles.TitleBox}>
                            <Text style={styles.label}>
                                MAIS SOLICITADOS
                            </Text>
                            <Lines tam={'50%'} />

                        </View>
                        <RequestSelect
                            setRequest={setRequest}
                            requestSelected={request}
                        />
                        <View style={styles.TitleBox}>
                            <Text style={styles.label}>
                                CATEGORIAS POPULARES
                            </Text>
                            <Lines tam={'40%'} />

                        </View>
                        <CategorySelect
                            setCategory={setCategory}
                            categorySelected={category}
                        />
                    </View>
                    <Itens IconSelected="Principal"/>
                </View>
        </Background>
    );
}
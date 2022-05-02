import React from "react";
import { ImageBackground, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { user } from '../../utils/user';
import { Lines } from "../Lines";

import { styles } from './styles';

export function InfoUsers() {
    return (
        <SafeAreaView
            style={styles.container}
        >
            {
                user.map((users, i) => (
                    <View key={i} style={styles.users}>
                        <View style={styles.content}>
                            <ImageBackground source={users.icon} style={styles.imageContainer} />
                        </View>
                        <Text style={styles.title}>
                            {users.title}
                        </Text>
                        <Text style={styles.email}>
                            {users.email}
                        </Text>
                    </View>
                ))
            }
            <Lines tam="100%" />
        </SafeAreaView>
    )
}
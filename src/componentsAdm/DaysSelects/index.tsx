import React, { useState } from "react";

import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

type Props = {
    daySelected: number;
}

export function DaysSelects({ daySelected }: Props) {
    const navigation = useNavigation();
    let [day1, day2, day3] = '';

    if (daySelected != undefined) {
        if (daySelected == 1) {
            day1 = 'check'
        }
        if (daySelected == 2) {
            day2 = 'check'
        }
        if (daySelected == 3) {
            day3 = 'check'
        }
    }

    const [check1, setCheck1] = useState(day1);
    const [check2, setCheck2] = useState(day2);
    const [check3, setCheck3] = useState(day3);
    
    console.log(daySelected)

    return (
        <View style={styles.container}>

            <Text style={styles.textDay}>
                Dias:
            </Text>
            <View style={styles.selectDay}>
                <Text style={styles.textQtdDays}>
                    7
                </Text>
                <View style={styles.containerButtonDay} >
                    <RectButton style={styles.buttonDay}
                        onPress={() => {
                            setCheck1('check');
                            setCheck2('');
                            setCheck3('');
                        }}>
                        <Feather name={check1} size={24} color="black" />
                    </RectButton>
                </View>
            </View>
            <View style={styles.selectDay}>
                <Text style={styles.textQtdDays}>
                    14
                </Text>
                <View style={styles.containerButtonDay} >
                    <RectButton style={styles.buttonDay}
                        onPress={() => {
                            setCheck2('check');
                            setCheck1('');
                            setCheck3('');
                        }}>
                        <Feather name={check2} size={24} color="black" />
                    </RectButton>
                </View>
            </View>
            <View style={styles.selectDay}>
                <Text style={styles.textQtdDays}>
                    21
                </Text>
                <View style={styles.containerButtonDay} >
                    <RectButton style={styles.buttonDay}
                        onPress={() => {
                            setCheck3('check');
                            setCheck1('');
                            setCheck2('');
                        }}>
                        <Feather name={check3} size={24} color="black" />
                    </RectButton>
                </View>
            </View>
        </View>
    )
}
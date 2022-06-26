import React, { useState } from "react";
import {
    View,
    Image,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    Platform
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import { Button } from "../../components/Button";
import { InputsEmail } from "../../components/InputsEmail";
import { InputsNumeric } from "../../components/InputsNumeric";
import { InputsPassword } from "../../components/InputsPassword";
import { InputsText } from "../../components/InputsText";
import { Lines } from "../../components/Lines";
import { get, onValue, ref, update } from "firebase/database";
import db from "../../database/database";

export function Cadastro() {
    const navigation = useNavigation()

   function handleSignIn() {
      //@ts-ignore
       navigation.navigate("SignIn");
   }

   function Principal() {
    //@ts-ignore
    navigation.navigate("Principal");
}

   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

function validateSignUp() {
       if (nome.length > 0 &&
            email.length > 0 &&
            phone.length > 0 &&
            password.length > 0 &&
            confirmPassword.length > 0 &&
            password == confirmPassword) {
                get(ref(db, '/user')).then(users => {
                    console.log(users)
                    let highestId = "0"
                    let can = true
                    users.forEach((usera) => {
                        const user = usera.val()
                        if (parseInt(usera.key) >= parseInt(highestId)) {
                            highestId = (parseInt(usera.key) + 1).toString()
                        }
                        if (user && user.email == email) {
                            can = false
                            return
                        }
                    })  
                    if (!can) return
                    update(ref(db, '/user/'+highestId), {
                        name: nome,
                        email: email,
                        phone: phone,
                        password: password
                    })
                    //@ts-ignore
                    navigation.navigate("Principal");  
                })
            }
   }

    return (
        <Background>
            <ScrollView style={styles.container}>

                <View style={styles.cabecalho}>
                    <AntDesign
                        name="arrowleft"
                        color={theme.colors.heading}
                        size={30}
                       onPress={handleSignIn}
                    />
                    <Image
                        source={IllustrationImg}
                        style={styles.image} resizeMode="stretch"
                    />
                </View>
                <View style={styles.form}>

                    <View style={styles.TitleBox}>
                        <Lines />
                        <Text style={styles.label}>
                            CADASTRO
                        </Text>
                        <Lines />
                    </View>

                    <InputsText title="Nome Completo" placeholder="Digite Seu Nome Aqui" setText={setNome}/>
                    <InputsEmail title="E-mail" placeholder="Digite Seu E-mail Aqui" setEmail={setEmail}/>
                    <InputsNumeric title="Celular" placeholder="Digite Seu Celular Aqui" setNumber={setPhone}/>
                    <InputsPassword title="Senha" placeholder="Senha" setText={setPassword}/>
                    <InputsPassword title="Confirme sua Senha" placeholder="Confirme sua Senha" setText={setConfirmPassword}/>
                    <Button
                        title="Cadastre-se"
                        onClick={validateSignUp}
                    />
                </View>

            </ScrollView>
        </Background>
    );
}
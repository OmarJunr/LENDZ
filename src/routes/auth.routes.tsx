import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn';
import { Cadastro } from '../screens/Cadastro';
import { Login } from '../screens/Login';
import { Password } from "../screens/Password";
import { VerifyVsu } from "../screens/VerifyVsu";
import { Principal } from "../screens/Principal";
import { theme } from '../global/styles/theme';
import { Carrinho } from "../screens/Carrinho";
import { Fila } from "../screens/Fila";
import { Solicitacao } from "../screens/Solicitacao";
import { ProductDetail } from "../screens/ProductDetail";
import { UserProfile } from "../screens/User"
import { LocalRetirada } from "../screens/LocalRetirada";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.primary
                }
            }}
        >

            <Screen
                name="SignIn"
                component={SignIn}
            />
            <Screen
                name="Carrinho"
                component={Carrinho}
            />
            <Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Screen
                name="Password"
                component={Password}
            />
            <Screen
                name="Login"
                component={Login}
            />
            <Screen
                name="VerifyVsu"
                component={VerifyVsu}
            />
            <Screen
                name="Principal"
                component={Principal}
            />
            <Screen
                name="Fila"
                component={Fila}
            />
            <Screen
                name="Solicitacao"
                component={Solicitacao}
            />
            <Screen
                name="ProductDetail"
                component={ProductDetail}
            />
            <Screen
                name="User"
<<<<<<< HEAD
                component={UserProfile} />
            <Screen
                name="LocalRetirada"
                component={LocalRetirada} />
=======
                component={UserProfile}
            />
>>>>>>> origin/main

        </Navigator>

    )

}
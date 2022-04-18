import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn';
import { Cadastro } from '../screens/Cadastro';
import { Login } from '../screens/Login';
import { Password } from "../screens/Password";
import { VerifyVsu } from "../screens/VerifyVsu";

import { theme } from '../global/styles/theme';

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

        </Navigator>

    )

}
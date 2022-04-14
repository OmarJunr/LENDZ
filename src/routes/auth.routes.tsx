import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '../screens/SignIn';
import { Cadastro } from '../screens/Cadastro';
// import { Login } from '../screens/Login';

// import { Passworld } from "../screens/Passworld";

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
    
              {/* <Screen
                name="Passworld"
                component={Passworld}
            /> */}
                {/* <Screen
                name="Login"
                component={Login}
            /> */}
         
        </Navigator>

    )

}
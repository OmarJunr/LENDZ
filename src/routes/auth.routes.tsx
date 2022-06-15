import React from "react";
import { createStackNavigator } from '@react-navigation/stack'

import { LocalRetirada } from "../screens/LocalRetirada";
import { ProductDetail } from "../screens/ProductDetail";
import { Solicitacao } from "../screens/Solicitacao";
import { EditProfile } from "../screens/EditProfile";
import { VerifyVsu } from "../screens/VerifyVsu";
import { Principal } from "../screens/Principal";
import { Cadastro } from '../screens/Cadastro';
import { Password } from "../screens/Password";
import { theme } from '../global/styles/theme';
import { Carrinho } from "../screens/Carrinho";
import { Suporte } from "../screens/Suporte";
import { UserProfile } from "../screens/User"
import { SignIn } from '../screens/SignIn';
import { Login } from '../screens/Login';
import { Fila } from "../screens/Fila";


import { BarLeftAdm } from "../screensAdm/BarLeftAdm";
import { PrincipalAdm } from "../screensAdm/PrincipalAdm";
import { UserAdm } from "../screensAdm/UserAdm";
import { SolicitacaoPendetes } from "../screensAdm/SolicitacaoPendetes";
import { SolicitacaoAdm } from "../screensAdm/SolicitacaoAdm";
import { SuporteAlunos } from "../screensAdm/SuporteAlunos";
import { SuporteAdm } from "../screensAdm/SuporteAdm";

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
                name="Suporte"
                component={Suporte}
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
                component={UserProfile}
            />
            <Screen
                name="LocalRetirada"
                component={LocalRetirada}
            />
            <Screen
                name="EditProfile"
                component={EditProfile}
            />


            <Screen
                name="PrincipalAdm"
                component={PrincipalAdm}
            />
            <Screen
                name="BarLeftAdm"
                component={BarLeftAdm}
            />
            <Screen
                name="UserAdm"
                component={UserAdm}
            />
            <Screen
                name="SolicitacaoPendetes"
                component={SolicitacaoPendetes}
            />
            <Screen
                name="SolicitacaoAdm"
                component={SolicitacaoAdm}
            />
            <Screen
                name="SuporteAlunos"
                component={SuporteAlunos}
            />
               <Screen
                name="SuporteAdm"
                component={SuporteAdm}
            />

        </Navigator>

    )

}
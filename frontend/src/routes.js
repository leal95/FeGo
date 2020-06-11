import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import TelaInicial from './pages/TelaInicial';
import Perfil from './pages/Perfil';
import PublicarCarona from './pages/PublicarCarona'
import ListarCaronas from './pages/ListarCaronas'
import DetalheCarona from './pages/DetalheCarona'
//importando cada uma das telas

export default function Routes() {
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}} >
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Cadastro" component={Cadastro} />
                <AppStack.Screen name="TelaInicial" component={TelaInicial} />
                <AppStack.Screen name="Perfil" component={Perfil} />
                <AppStack.Screen name="PublicarCarona" component={PublicarCarona} />
                <AppStack.Screen name="ListarCaronas" component={ListarCaronas} />
                <AppStack.Screen name="DetalheCarona" component={DetalheCarona} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
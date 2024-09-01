import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import Login from "../Pages/Login";
import DashboardUser from "../Pages/DashboardUser";
import RecoveryPassword from "../Pages/RecoveryPassword";
import CadastroAcao from "../Pages/CadastroAcao";
import DashboardAcao from "../Pages/DashboardAcao";
import UpdateAcao from "../Pages/UpdateAcao";
import Parceiros from "../Pages/Parceiros";
import Frequencia from "../Pages/Frequencia";
import Observacoes from "../Pages/Observacoes";
import Relatorio from "../Pages/Relatorio";

import DataProvider from "../Contexts/DataProvider";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <DataProvider>
                <Stack.Navigator 
                    initialRouteName='Relatorio' 
                    screenOptions={
                        {headerShown: false, gestureEnabled:false}
                    }
                >
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
                    <Stack.Screen name="DashboardUser" component={DashboardUser}/>
                    <Stack.Screen name="CadastroAcao" component={CadastroAcao}/>
                    <Stack.Screen name="DashboardAcao" component={DashboardAcao}/>
                    <Stack.Screen name="UpdateAcao" component={UpdateAcao}/>
                    <Stack.Screen name="Parceiros" component={Parceiros}/>
                    <Stack.Screen name="Frequencia" component={Frequencia}/>
                    <Stack.Screen name="Observacoes" component={Observacoes}/>
                    <Stack.Screen name="Relatorio" component={Relatorio}/>
                    
                </Stack.Navigator>
            </DataProvider>
        </NavigationContainer>
    );
}
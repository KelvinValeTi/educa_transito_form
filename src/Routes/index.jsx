import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import Login from "../Pages/Login";
import DashboardUser from "../Pages/DashboardUser";
import RecoveryPassword from "../Pages/RecoveryPassword";
import CadastroAcao from "../Pages/CadastroAcao";

import DataProvider from "../Contexts/DataProvider";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <DataProvider>
                <Stack.Navigator 
                    initialRouteName='CadastroAcao' 
                    screenOptions={
                        {headerShown: false, gestureEnabled:false}
                    }
                >
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
                    <Stack.Screen name="DashboardUser" component={DashboardUser}/>
                    <Stack.Screen name="CadastroAcao" component={CadastroAcao}/>
                </Stack.Navigator>
            </DataProvider>
        </NavigationContainer>
    );
}
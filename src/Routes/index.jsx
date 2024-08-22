import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../Pages/Login";
import DashboardUser from "../Pages/DashboardUser";
import RecoveryPassword from "../Pages/RecoveryPassword";

import DataProvider from "../Contexts/DataProvider";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <DataProvider>
                <Stack.Navigator 
                    initialRouteName='DashboardUser' 
                    screenOptions={{headerShown: false}}
                >
                    <Stack.Screen name="Login" component={Login}/>
                    <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
                    <Stack.Screen name="DashboardUser" component={DashboardUser} />
                </Stack.Navigator>
            </DataProvider>
        </NavigationContainer>
    );
}
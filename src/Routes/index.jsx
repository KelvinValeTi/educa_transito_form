import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../Pages/Login";
import DashboardUser from "../Pages/DashboardUser";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="DashboardUser" component={DashboardUser} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
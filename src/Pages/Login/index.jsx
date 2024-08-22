import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

import LoginBtn from "../../Components/LoginBtn";
import ForgetPasswordBtn from "../../Components/ForgetPasswordBtn";

//arquivo com as configurações da API de usuários
import api from '../../ConnectApi';

async function getDatabaseUsers(){
    try{
        const response = await api.get("/users");
        
        return response.data;
    }catch(err){
        console.error(err);
        return false;
    }
}

const databaseUsers = getDatabaseUsers();

export default function Login({navigation}){
    
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style ={styles.userPasswordTitle}>Usuário:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUser}
                    value={user}
                    autoCapitalize="none"
                />

                <Text style ={styles.userPasswordTitle}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                />

                <LoginBtn
                    databaseUsers = {databaseUsers}
                    user={user}
                    password={password}
                    navigation = {navigation}
                />

                <ForgetPasswordBtn navigation = {navigation} />

            </View>
        </View>
    );
}



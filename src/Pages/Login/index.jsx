import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export default function Login(){
    
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
                />

                <Text style ={styles.userPasswordTitle}>Senha:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                />

                <TouchableOpacity style ={styles.loginBtn}>
                    <Text style={styles.textBtn}>ENTRAR</Text>
                </TouchableOpacity>

                <Text style ={styles.forgetPassword}>Esqueci a senha</Text>
            </View>
        </View>
    );
}



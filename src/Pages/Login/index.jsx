import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>
            <Text style ={styles.userPasswordTitle}>Usuário:</Text>

        <TextInput
            style={styles.userInput}
            placeholder="insira nome de usuário"

        />
            <Text style ={styles.userPasswordTitle}>Senha:</Text>

            <TouchableOpacity style ={styles.loginBtn}>
                <Text>Login</Text>
            </TouchableOpacity>

            <Text style ={styles.userSenha}>Esqueci a senha</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#23252B",
        justifyContent:"flex-end",
    },
    userPassWordTitle:{
        color:"#ffffff",
    },
    userInput:{
        borderBottomColor:"#fff",
        borderBottomWidth:2,
        width:200,
        height:40,
    },
    passwordInput:{
        
    },
    loginBtn:{
        backgroundColor:"#C6632C",
        borderRadius:12,
        width:70,
        height:20,
    },

});


import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

export default function RecoveryPassword({navigation}){
    
    const [user, setUser] = useState();
    
    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style ={styles.userPasswordTitle}>Qual o seu nome?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setUser}
                    value={user}
                    autoCapitalize="none"
                />
            </View>

            <TouchableOpacity 
                style ={styles.btn}
                onPress={()=>console.log("recovery")}
            >
                <Text style={styles.textBtn}>Recuperar senha</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style ={styles.btn}
                onPress={()=>navigation.goBack()}
            >
                <Text style={styles.textBtn}>Voltar</Text>
            </TouchableOpacity>

        </View>
    );
}



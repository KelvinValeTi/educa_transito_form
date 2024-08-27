import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MaskInput from 'react-native-mask-input';

/**
 * 
 * Esse tipo de dado deveria ser do tipo DATE(), mas por enquanto vai ser String com uma máscara de formato data
 * 
 * depois faz uma validação disso, pensa em pull request no projeto
 */
const exemplo = [/\d/, /\d/, ":", /\d/, /\d/];

export default function Horario({horario, setHorario}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Horario:</Text>
            <MaskInput
                style={styles.input}
                onChangeText={setHorario}
                value={horario}
                mask={(text) => {
                    if (text.replace(/\D+/g, "").length <= 4) {
                      return exemplo
                    } else {
                      return exemplo
                    }
                }}
                keyboardType="numeric"
                placeholderTextColor="#bebebe"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(10),
        width:'auto',
        gap:RFValue(5)
    },
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_600SemiBold",
        textAlign:'left',
        paddingLeft:RFValue(15)
    },
    input:{
        backgroundColor:'#FFFFFF',
        width:RFValue(120),
        height:RFValue(40),
        borderRadius:RFValue(24),
        textAlign:'center',
        fontFamily:"Inter_500Medium",
    }
});



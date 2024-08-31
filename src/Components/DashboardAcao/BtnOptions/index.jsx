import React from "react";
import {Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function BtnOptions({title, isEmpty, navigation}){
    
    function btnPressed(){
        switch(title){
            case "Editar dados obrigatorios":
                console.log('Editar dados obrigatorios')
                navigation.navigate('UpdateAcao');
                break;
            case "Frequência":
                console.log('Frequência')
                break;
            case "Parceiros":
                console.log('Parceiros');
                navigation.navigate('Parceiros');
                break;
            case "Observações":
                console.log('Observações')
                break;
            default:
                console.log('verificar variavel title')       
        }
    }

    return(
        <TouchableOpacity 
            style={styles.btn(isEmpty)}
            onPress={()=>{
                btnPressed();
            }}    
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:isEmpty=>({
        backgroundColor: isEmpty? '#C62C2C' : '#5AA93F',
        width:RFValue(300),
        borderRadius:RFValue(10),
        paddingLeft: RFValue(20),
        paddingVertical: RFValue(20),
        marginVertical:RFValue(5)
    }),
    title:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(16),
        textAlign:'left'
    },
});



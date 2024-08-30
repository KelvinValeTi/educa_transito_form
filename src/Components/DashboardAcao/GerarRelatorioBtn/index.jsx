import React from "react";
import {Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function GerarRelatorioBtn({navigation}){
    
    return(
        <TouchableOpacity 
            style={styles.btn}
            onPress={()=>{
                console.log('gerar relatorio!!');
            }}    
        >
            <Text style={styles.title}>Gerar Relatório</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#2C8EC6',
        width:RFValue(300),
        borderRadius:RFValue(30),
        paddingVertical: RFValue(16),
        marginVertical:RFValue(30)
    },
    title:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(20),
        textAlign:'center'
    },
});



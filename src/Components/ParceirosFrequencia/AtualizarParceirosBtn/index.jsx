import React from "react";
import {Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function AtualizarParceirosBtn({navigation, dataArray}){
   
    return(
        <TouchableOpacity 
            style={styles.btn}
            onPress={()=>{
                //console.log('Atualizar Parceiros');
                //console.log(parceiros)
                 console.log(dataArray)
            }}    
        >
            <Text style={styles.title}>Atualizar</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: '#2C8EC6',
        width:RFValue(300),
        borderRadius:RFValue(30),
        paddingVertical: RFValue(12),
        marginVertical:RFValue(30)
    },
    title:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(20),
        textAlign:'center'
    },
});



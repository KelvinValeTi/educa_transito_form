import React from "react";
import {Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import api from "../../../ConnectApi";

export default function AtualizarParceirosBtn({navigation, dataArray, id}){

    function atualizar(){
        console.log('entrou em atualizar');

        api.put(`/acao/${id}`, {
            parceiros:dataArray
          })
          .then(function (response) {
            console.log(response);
            //setIsConnectedAcoes(false);
            navigation.goBack();
          })
          .catch(function (error) {
            console.log('erro: '+error);
          });  
    }

    return(
        <TouchableOpacity 
            style={styles.btn}
            onPress={()=>{
                 atualizar();
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



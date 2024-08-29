import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../Contexts/DataProvider";

import api from '../../ConnectApi/index';

export default function AtualizarAcaoBtn({
    projeto, local, 
    municipio, dataAcao,
    horario, publicoAtingido,
    qtdMaterial, publicoAlvo,
    navigation, id
    }
){
    const {myUser} = useContext(AuthContext); //myUser.name é o nome do coordenador
    const {setIsConnectedAcoes} = useContext(AuthContext);

    const coordenador = myUser.name;

    const {acaoAtual, setAcaoAtual} = useContext(AuthContext);

    function atualizarAcao(){
        api.put(`/acao/${id}`, {
            coordenador: coordenador,
            projeto: projeto,
            local: local,
            municipio: municipio,
            data_acao: dataAcao,
            qtd_material: qtdMaterial,
            horario: horario,
            publico_atingido: publicoAtingido,
            publico_alvo: publicoAlvo
          })
          .then(function (response) {
            //console.log(response);
            setIsConnectedAcoes(false);
            navigation.navigate('DashboardAcao', {voltaDuasStacks: false})
          })
          .catch(function (error) {
            console.log('erro: '+error);
          });  
    }
    

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>{
                    atualizarAcao();
                }}
                style={styles.btn}
            >
                <Text style={styles.text}>Atualizar dados</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(50),
        marginBottom:RFValue(20), 
        width:RFValue(300),

    },
    btn:{
        backgroundColor:'#2C8EC6',
        borderRadius: RFValue(24),
        width:'auto',
        height:RFValue(50),
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#FFFFFF',
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
    },
});



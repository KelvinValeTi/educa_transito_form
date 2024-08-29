import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../../Contexts/DataProvider";

import api from "../../../ConnectApi";

export default function CadastrarBtn({
    projeto, local, 
    municipio, dataAcao,
    horario, publicoAtingido,
    qtdMaterial, publicoAlvo,
    navigation
    }
){

    const {myUser} = useContext(AuthContext); //myUser.name é o nome do coordenador
    const coordenador = myUser.name;

    const {minhasAcoes}= useContext(AuthContext);
    const {setAcaoAtual} = useContext(AuthContext);
    
    //tests logs
    function testLog(){
        console.log('Projeto: '+projeto+ '|| local: '+local+' || Municipio: '+municipio+ "|| Data: "+dataAcao+" || horario: "+horario+ "|| publico atingido: "+publicoAtingido+ "|| qtd material: "+qtdMaterial+" || publico alvo: "+publicoAlvo);
        console.log(coordenador);
        console.log('---------------');
        console.log(minhasAcoes);
    }

    function adicionarAcao(){
        api.post('/acao', {
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
            setAcaoAtual(response.data);
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
                    //testLog();
                    adicionarAcao();
                }}
                style={styles.btn}
            >
                <Text style={styles.text}>Cadastrar</Text>
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



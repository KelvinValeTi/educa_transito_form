import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../../Contexts/DataProvider";

export default function CadastrarBtn({
    projeto, local, 
    municipio, dataAcao,
    horario, publicoAtingido,
    qtdMaterial, publicoAlvo
    }
){

    const {myUser} = useContext(AuthContext); //myUser.name é o nome do coordenador
    const coordenador = myUser.name;
    
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>{
                    console.log('Projeto: '+projeto+ '|| local: '+local+' || Municipio: '+municipio+ "|| Data: "+dataAcao+" || horario: "+horario+ "|| publico atingido: "+publicoAtingido+ "|| qtd material: "+qtdMaterial+" || publico alvo: "+publicoAlvo);
                    console.log(coordenador);
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



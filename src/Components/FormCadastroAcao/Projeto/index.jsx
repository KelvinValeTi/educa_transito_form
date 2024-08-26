import React, {useState} from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import ProjetoThumbnail from "./ProjetoThumbnail";

export default function Projeto({setProjeto, setOpenProjeto}){
    
    const projeto = [
        {
            title: 'projeto', 
            data: ['Somos Todos Pedestres', 'Detran Volante', 'DETRAN vai à Escola', 'Direção Certa', 'Se Liga na Via', 'Agente Multiplicador', 'DETRAN Cultural', 'Condutor do Amanhã', 'Conhecendo o DETRAN', 'DETRAN em Ação', 'DETRAN Solidário', 'Expo-DETRAN', 'Feriado bom é Feriado Seguro', 'Humanizar',  'Servidor em Foco', 'Transitarte']
        }
    ];

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Selecione um projeto:</Text>
            
            <SectionList
                sections={projeto}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => (
                    <ProjetoThumbnail 
                        nomeProjeto={item} 
                        setOpenProjeto={setOpenProjeto}
                        setProjeto={setProjeto}
            /> 
                    )}            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:RFValue(70),
        width:'100%',
        alignItems:'center'
        
    },
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(20),
        marginBottom:RFValue(20),
        fontFamily:"Inter_700Bold",
        textAlign:'center',
    },
});



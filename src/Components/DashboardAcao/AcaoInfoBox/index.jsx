import React, { useContext } from "react";
import {View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../../Contexts/DataProvider";

export default function AcaoInfoBox(){

    const {acaoAtual} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text style={styles.titleProjeto}>{acaoAtual.projeto}</Text>
            <View style={styles.underlineDecor}/>

            <Text style={styles.descricao}>Local: {acaoAtual.local}</Text>
            <Text style={styles.descricao}>Município: {acaoAtual.municipio}</Text>
            <View style={styles.subContainer}>
                <Text style={styles.descricao}>Data: {acaoAtual.data_acao}</Text>
                <Text style={styles.descricao}>Horário: {acaoAtual.horario}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop: RFValue(30),
        marginBottom: RFValue(40),
        backgroundColor:'#C6632C',
        width:RFValue(300),
        borderRadius:RFValue(24),
        paddingHorizontal: RFValue(15),
        paddingVertical: RFValue(25),
        gap:RFValue(5),
    },
    titleProjeto:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(20),
        textAlign:'center'
    },
    underlineDecor:{
        width:RFValue(270),
        height:RFValue(2),
        backgroundColor:"#FFFFFF",
        alignSelf:'center'
    },
    descricao:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(14),
    },
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});



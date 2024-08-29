import React, { useContext } from "react";
import {Text, TouchableOpacity, FlatList} from "react-native";

import styles from "./styles";
import { AuthContext } from "../../Contexts/DataProvider";

//component thumbnail da operação
const Acao = ({navigation, acaoAtual, setAcaoAtual}) => (
    <TouchableOpacity 
        style={styles.acaoThumbnail}
        onPress={()=>{
           //console.log(acaoAtual.projeto);
           setAcaoAtual(acaoAtual);
           navigation.navigate('DashboardAcao', {voltaDuasStacks:false});
        }}
    >
        <Text style={styles.projeto}>{acaoAtual.projeto}</Text>
        <Text style={styles.local}>Local: {acaoAtual.local}</Text>
        <Text style={styles.dataAcao}>Data: {acaoAtual.data_acao}</Text>
    </TouchableOpacity>
);
//fim da thumbnail da operação

export default function UltimasAcoes({navigation}){
   
    const {minhasAcoes} = useContext(AuthContext);
    const {setAcaoAtual} = useContext(AuthContext);
    //ordenar este vetor por data depois.
    
    return(
        <FlatList
            data={minhasAcoes}
            renderItem={({item}) => 
                <Acao 
                    navigation={navigation}
                    acaoAtual = {item}
                    setAcaoAtual={setAcaoAtual}
                />
            }
                keyExtractor={item => item._id} 
        />
    );
}



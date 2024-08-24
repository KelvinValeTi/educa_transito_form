import React, { useContext } from "react";
import {Text, TouchableOpacity, FlatList} from "react-native";

import styles from "./styles";
import { AuthContext } from "../../Contexts/DataProvider";

//component thumbnail da operação
const Acao = ({projeto, local, dataAcao}) => (
    <TouchableOpacity style={styles.acaoThumbnail}>
        <Text style={styles.projeto}>{projeto}</Text>
        <Text style={styles.local}>Local: {local}</Text>
        <Text style={styles.dataAcao}>Data: {dataAcao}</Text>
    </TouchableOpacity>
);
//fim da thumbnail da operação

export default function UltimasAcoes(){
   
    const {minhasAcoes} = useContext(AuthContext);

    //ordenar este vetor por data depois.
    
    return(
        <FlatList
            data={minhasAcoes}
            renderItem={({item}) => 
                <Acao 
                    projeto={item.projeto}
                    local ={item.local}
                    dataAcao={item.data_acao} 
                />
            }
                keyExtractor={item => item._id} 
        />
    );
}



import React from "react";
import { View, Text, TouchableOpacity, FlatList} from "react-native";

import styles from "./styles";

//db temp
const DATA = [
    {
      id: 1,
      projeto: 'Detran vai à Escola',
      local: 'Av. Daniel de LaTouche, em frente ao condominio Jardins',
      data_acao:'xx/xx/xxxx'
    },
    {
        id: 2,
        projeto: 'Detran Volante',
        local: 'Equatorial Energia',
        data_acao:'xx/xx/xxxx'
    },
    {
        id: 3,
        projeto: 'Detran Cultural',
        local: 'Parque Rangedor',
        data_acao:'xx/xx/xxxx'
    },
    {
        id: 4,
        projeto: 'Detran Cultural',
        local: 'Parque Rangedor',
        data_acao:'xx/xx/xxxx'
    },
    {
        id: 5,
        projeto: 'Detran Cultural',
        local: 'Parque Rangedor',
        data_acao:'xx/xx/xxxx'
    },
];

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
   
    return(
        <FlatList
            data={DATA}
            renderItem={({item}) => 
                <Acao 
                    projeto={item.projeto}
                    local ={item.local}
                    dataAcao={item.data_acao} 
                />
            }
                keyExtractor={item => item.id}        
        />
    );
}



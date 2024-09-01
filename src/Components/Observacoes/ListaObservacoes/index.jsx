import React, {useState, useCallback} from "react";
import { View, Text, SectionList, TouchableOpacity, Image} from "react-native";
import { RefreshControl } from 'react-native';

import styles from "./styles";

export default function ListaObservacoes({label, dataArray, setDataArray}){

    const DATA=[{
        id:1,
        data:dataArray
    }];


    const [isRefreshing, setIsRefreshing] = useState(false);
    
    function excluirObservacao(obs){
       
        const index = dataArray.indexOf(obs)
        
        if(index>-1){
            dataArray.splice(index, 1);
            setDataArray(dataArray);

            setIsRefreshing(true);
            setTimeout(()=>{
                setIsRefreshing(false);
            },500);
        }
    }



    return(
        <View style={styles.container}>
            <SectionList
                horizontal
                showsHorizontalScrollIndicator={true}

                refreshing={isRefreshing}

                sections={DATA}
                keyExtractor={(item, index) => item +index}
                renderItem={({item}) => (
                    <View style={styles.observacao}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.observacaoTitle}>Observação:</Text>

                            <TouchableOpacity 
                                onPress={()=>{excluirObservacao(item)}}    
                            >
                                <Image 
                                    style={styles.icon}
                                    source={require('../../../assets/lixo_icon.png')}
                                />
                            </TouchableOpacity>
                        </View>

                        <Text style={styles.observacaoText}>{item}</Text>
                        
                    </View>
                )}
            />
         
        </View>
    );
}

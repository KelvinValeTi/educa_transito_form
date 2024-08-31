import React, {useState, useCallback} from "react";
import { View, Text, SectionList, TouchableOpacity, Image} from "react-native";
import { RefreshControl } from 'react-native';

import styles from "./styles";

export default function ListaParceirosFrequencia({label, dataArray, setDataArray}){

    const DATA=[{
        id:1,
        data:dataArray
    }];


    const [isRefreshing, setIsRefreshing] = useState(false);
    
    function excluirParceiro(parceiro){
       
        const index = dataArray.indexOf(parceiro)
        console.log(index)
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
            <Text style={styles.label}>{label}:</Text>
            <SectionList
                style={styles.lista}
                refreshing={isRefreshing}

                sections={DATA}
                keyExtractor={(item, index) => item +index}
                renderItem={({item}) => (
                    <View style={styles.parceiro}>
                        <Text style={styles.parceiroText}>{item}</Text>
                        <TouchableOpacity 
                            onPress={()=>{excluirParceiro(item)}}    
                        >
                            <Image 
                                style={styles.excluirIcon}
                                source={require('../../../assets/lixo_icon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
         
        </View>
    );
}

import React, {useState, useCallback} from "react";
import { View, Text, SectionList, TouchableOpacity, Image} from "react-native";
import { RefreshControl } from 'react-native';

import styles from "./styles";

export default function ListaParceirosFrequencia({label, dataArray}){

    const DATA=[{
        id:1,
        data:dataArray
    }];


    const [isRefreshing, setIsRefreshing] = useState(false);
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}:</Text>
            <SectionList
                style={styles.lista}
                refreshControl={isRefreshing}

                sections={DATA}
                keyExtractor={(item, index) => item +index}
                renderItem={({item}) => (
                    <View style={styles.parceiro}>
                        <Text style={styles.parceiroText}>{item}</Text>
                        <TouchableOpacity 
                            onPress={()=>{console.log('trash icon ' +item)}}    
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

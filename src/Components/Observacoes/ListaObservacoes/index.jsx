import React, {useState} from "react";
import { View, Text, SectionList, TouchableOpacity, Image, Alert} from "react-native";

import styles from "./styles";

export default function ListaObservacoes({dataArray, setDataArray}){

    //é necessario transformar em objeto para a SectionList funcionar
    const DATA=[{
        id:1,
        data:dataArray
    }];

    //administra o refresh
    const [isRefreshing, setIsRefreshing] = useState(false);
    
    //Exclui uma observação
    function excluirObservacao(obs){
        
        Alert.alert('Excluir Observação', 'Tem certeza que deseja excluir esta observação?', [
            {
              text: 'Não, foi engano',
              style: 'cancel',
            },
            {
                text: 'Sim, desejo excluir', 
                onPress: () =>{
                    const index = dataArray.indexOf(obs);
        
                    if(index>-1){
                        dataArray.splice(index, 1);
                        setDataArray(dataArray);
            
                        setIsRefreshing(true);
                        setTimeout(()=>{
                            setIsRefreshing(false);
                        },500);
                    } 
                },
            }
          ]);

    }

    return(
        <View style={styles.container}>
            
            <Text style={styles.label}>Observações atuais:</Text>

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

                        <TouchableOpacity 
                            onPress={()=>{
                                console.log('Caso o projeto vá para frente, implementar uma especie de modal preview da observação aqui');
                            }}
                        >
                            <Text style={styles.observacaoText}>{item}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
         
        </View>
    );
}

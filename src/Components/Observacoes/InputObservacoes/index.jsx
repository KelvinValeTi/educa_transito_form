import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";

import styles from "./styles";

export default function InputObservacoes({dataArray, setDataArray, setIsRefreshing}){
    
    const [input, setInput] = useState('');

    function addObservacao(){
        //validação aqui para evitar de ter dois parceiros iguais
        dataArray.unshift(input);
        const novaObservacao = dataArray;
        setDataArray(novaObservacao);
        
        refresh();
        
        setInput('');
    }

    //refresh sectionList component
    function refresh(){    
        setIsRefreshing(true);
        setTimeout(()=>{
            setIsRefreshing(false);
        },500);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Inserir Observação:</Text>
            
                <TextInput
                    multiline
                    style={styles.input}
                    onChangeText={setInput}
                    value={input}
                    placeholder="Digite uma observação sobre a ação"
                    placeholderTextColor="#bebebe"
                />

                <TouchableOpacity 
                    style={styles.addBtn}
                    onPress={()=>{
                        addObservacao();
                    }}
                >
                    <Image 
                        style={styles.addIcon}
                        source={require('../../../assets/add_icon.png')}
                    />
                </TouchableOpacity>
            
        </View>
    );
}


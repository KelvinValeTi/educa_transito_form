import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";

import styles from "./styles";

export default function InputObservacoes({label, placeholder, dataArray, setDataArray, setIsRefreshing}){
    
    const [input, setInput] = useState('');

    function addParceiro(){
        //validação aqui para evitar de ter dois parceiros iguais
        dataArray.unshift(input);
        const novoParceiro = dataArray;
        setDataArray(novoParceiro);
        
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
            <Text style={styles.label}>Inserir {label}:</Text>
            <View style={styles.subContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={setInput}
                    value={input}
                    placeholder={placeholder}
                    placeholderTextColor="#bebebe"
                />

                <TouchableOpacity 
                    style={styles.addBtn}
                    onPress={()=>{
                        addParceiro();
                    }}
                >
                    <Image 
                        style={styles.addIcon}
                        source={require('../../../assets/add_icon.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}


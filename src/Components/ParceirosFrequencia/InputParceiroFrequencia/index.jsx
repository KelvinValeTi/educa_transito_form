import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Image} from "react-native";

import styles from "./styles";

export default function InputParceiroFrequencia({label, placeholder}){
    
    const [input, setInput] = useState('');

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
                        console.log('Add pressionado!')
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


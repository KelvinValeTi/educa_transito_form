import React, {useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, Image} from "react-native";

import styles from "./styles";


export default function ListaParceirosFrequencia({label, parceiros}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}:</Text>

            <ScrollView style={styles.lista}>
                <View style={styles.parceiro}>
                    <Text style={styles.parceiroText}>Policia militar</Text>
                    <TouchableOpacity 
                        onPress={()=>{console.log('trash icon')}}    
                    >
                        <Image 
                            style={styles.excluirIcon}
                            source={require('../../../assets/lixo_icon.png')}
                        />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}


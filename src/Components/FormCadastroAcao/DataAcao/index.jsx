import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import MaskInput, {Masks} from 'react-native-mask-input';

/**
 * 
 * Esse tipo de dado deveria ser do tipo DATE(), mas por enquanto vai ser String com uma máscara de formato data
 */

export default function DataAcao({dataAcao, setDataAcao}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Data:</Text>
            <MaskInput
                style={styles.input}
                onChangeText={setDataAcao}
                value={dataAcao}
                mask={Masks.DATE_DDMMYYYY}
                keyboardType="numeric"
                placeholderTextColor="#bebebe"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(10),
        width:'auto',
        gap:RFValue(5)
    },
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_600SemiBold",
        textAlign:'center',
    },
    input:{
        backgroundColor:'#FFFFFF',
        width:RFValue(120),
        height:RFValue(40),
        borderRadius:RFValue(24),
        textAlign:'center',
        fontFamily:"Inter_500Medium",
    }
});



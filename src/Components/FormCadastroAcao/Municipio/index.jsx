import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default function Municipio({municipio, setMunicipio}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Município:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setMunicipio}
                value={municipio}
                autoCapitalize="none"
                placeholder="Digite o Município"
                placeholderTextColor="#bebebe"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(10),
        width:RFValue(300),
        gap:RFValue(5)
    },
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_600SemiBold",
        textAlign:'left',
        paddingLeft:RFValue(15)
    },
    input:{
        backgroundColor:'#FFFFFF',
        width:'auto',
        height:RFValue(40),
        borderRadius:RFValue(24),
        textAlign:'center',
        fontFamily:"Inter_500Medium",
    }
});
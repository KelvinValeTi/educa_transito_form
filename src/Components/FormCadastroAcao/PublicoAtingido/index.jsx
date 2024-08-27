import React from "react";
import { View, Text, TextInput, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default function PublicoAtingido({PublicoAtingido, setPublicoAtingido}){
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Público{'\n'}atingido:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPublicoAtingido}
                value={PublicoAtingido}
                keyboardType="numeric"
                placeholder="ex: 150"
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
        width:RFValue(140),
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_600SemiBold",
        textAlign:'center',
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



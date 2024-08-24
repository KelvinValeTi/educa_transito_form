import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default function CadastrarBtn({projeto, local}){
    
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>{
                    console.log('projeto: '+projeto+'// local: '+local)
                }}
                style={styles.btn}
            >
                <Text style={styles.text}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(50),
        width:RFValue(300),
    },
    btn:{
        backgroundColor:'#2C8EC6',
        borderRadius: RFValue(24),
        width:'auto',
        height:RFValue(50),
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#FFFFFF',
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
    },
});



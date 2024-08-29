import React from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default function ForgetPasswordBtn({navigation}){

    return(
        <TouchableOpacity 
            onPress={()=>{
                alert("Ainda não implementado");
                //navigation.navigate("RecoveryPassword");
            }}
        >
            <Text style ={styles.forgetPassword}>Esqueci a senha</Text>
        </TouchableOpacity>
    );
}


/*STYLES*/
const styles = StyleSheet.create({
    forgetPassword:{
        color:"#ffffff",
        textAlign:"center",
        fontFamily:"Inter_700Bold",
        fontSize:RFValue(14),
    },
});





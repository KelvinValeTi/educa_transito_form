import React from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import login from "../../DatabaseTemp"; //database temporario

export default function LoginBtn({user, password}){
    
    function isValid(){
        for(let i=0; i<login.length; i++){
            if(user === login[i].user){
                console.log("-------------");
                console.log("usuário existe");

                if(password === login[i].password){
                    console.log("senha correta");
                    break;
                }else{
                   console.log("Senha incorreta");
                   break;
                }
            }
        }
    }

    return(
        <TouchableOpacity 
            style ={styles.loginBtn}
            onPress={()=>isValid()}
        >
            <Text style={styles.textBtn}>ENTRAR</Text>
        </TouchableOpacity>
    );
}


/*STYLES*/
const styles = StyleSheet.create({
    loginBtn:{
        backgroundColor:"#C6632C",
        borderRadius:12,
        marginBottom:RFValue(10),
        marginTop:RFValue(30),
        width:RFValue(220),
        height:RFValue(40),
        
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    textBtn:{
        color:"#23252B",
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
    },
});





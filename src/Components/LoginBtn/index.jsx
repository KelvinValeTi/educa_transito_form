import React, {useState} from "react";
import { Text, TouchableOpacity, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

//import login from "../../DatabaseTemp"; //database temporario
//arquivo com as configurações da API de usuários
import api from '../../ConnectApi';


export default function LoginBtn({user, password}){
    
    const [databaseUsers, setDatabaseUsers] = useState('');

    async function login(){
        if(databaseUsers === ""){
            try{
                //pegando os usuários do banco de dados
                const response = await api.get("/users");
                setDatabaseUsers(response.data);
                isValid(databaseUsers);
            }catch(err){
                console.error(err);
            }
        }else{
            console.log('entrou no else');
            isValid(databaseUsers);
        }
    }
    
    function isValid(databaseUsers){
        for(let i=0; i<databaseUsers.length; i++){
            if(user === databaseUsers[i].user_login){
                console.log("-------------");
                console.log("usuário existe");

                if(password === databaseUsers[i].password){
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
            onPress={()=>login()}
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





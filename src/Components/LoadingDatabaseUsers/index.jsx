import React, {useContext, useState} from "react";
import { View, StyleSheet, Text} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../Contexts/DataProvider";

//conectando a api de usuarios no banco de dados
import api from '../../ConnectApi';

export default function LoadingDatabaseUsers(){
    
    const {databaseUsers, setDatabaseUsers} = useContext(AuthContext);
    const {isConnectedUsers, setIsConnectedUsers} = useContext(AuthContext);

    const [errorConnection, setErrorConnection] = useState('');

    //fará a conexão com o banco de dados
    async function connectDatabase(){
            try{
                //pegando os usuários do banco de dados
                const response = await api.get("/users");    
                setDatabaseUsers(response.data);
                setIsConnectedUsers(true);
            }catch(err){
                console.error(err);
                setErrorConnection("Cheque sua conexão com a internet");
            }
    }//fim function connectDataBase
    
    if(!isConnectedUsers){
        setTimeout(()=>{ //só pra ficar bonito hehehe para mostrar o design da tela de loading
            connectDatabase();
        }, 2000);
        
    }

    return(
        <View style= {styles.container}>
            {
                errorConnection===''?
                <Text style= {styles.text}>Loading</Text>
                :
                <Text style= {styles.text}>{errorConnection}</Text>
            }
            
        </View>
    );
}


/*STYLES*/
const styles = StyleSheet.create({
   container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#131313"
   },
   text:{
    fontSize:RFValue(30),
    color:"#FFFFFF",
    textAlign:'center'
   }
});





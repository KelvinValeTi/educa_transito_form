import React, {useContext, useState} from "react";
import { View, StyleSheet, Text} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../Contexts/DataProvider";

//conectando a api de usuarios no banco de dados
import api from '../../ConnectApi';

export default function LoadingDatabaseAcoes(){
    
    const {isConnectedAcoes, setIsConnectedAcoes} = useContext(AuthContext);
    const {myUser} = useContext(AuthContext);

    //armazena todas as ações de TODOS OS COORDENADORES
    const {databaseAcoes, setDatabaseAcoes} = useContext(AuthContext); 
    //console.log(databaseAcoes[2].coordenador);

    //apenas ações do COORDENADOR ATUAL
    const {setMinhasAcoes} = useContext(AuthContext);

    const [errorConnection, setErrorConnection] = useState('');

    //fará a conexão com o banco de dados
    async function connectDatabaseAcoes(){
            try{
                //pegando os usuários do banco de dados
                const response = await api.get("/acao");
                setDatabaseAcoes(response.data);
                setIsConnectedAcoes(true);

                console.log('---------');
                //console.log(databaseAcoes);
                console.log(armazenaAcao());
                setMinhasAcoes(armazenaAcao());
            }catch(err){
                console.error(err);
                setErrorConnection("Cheque sua conexão com a internet");
            }
    }//fim function connectDataBase
    
    if(!isConnectedAcoes){
        setTimeout(()=>{ //só pra ficar bonito hehehe para mostrar o design da tela de loading
            connectDatabaseAcoes();
        }, 2000);
    }

    //vai puxar as informações pelo nome do coordenador e atribuir a minhasAcoes
    function armazenaAcao(){
        let minhasAcoes=[];

        //databaseAcoes[i].coordenador === myUser.name
        for(let i=0; i<databaseAcoes.length;i++){
            if(databaseAcoes[i].coordenador === 'Alexandre'){
                minhasAcoes.push(databaseAcoes[i]);
            }
        }

        /*
        databaseAcoes.forEach(
            (acao) =>{
                if(databaseAcoes.coordenador === myUser.name){
                    minhasAcoes.push(acao);
                }
            });
            */
            return minhasAcoes;
    }

    return(
        <View style= {styles.container}>
            {
                errorConnection===''?
                <Text style= {styles.text}>Calma, puxando as informações do usuário</Text>
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





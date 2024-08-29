import React, {useContext, useState} from "react";
import { View, StyleSheet, Text} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../../Contexts/DataProvider";

//conectando a api de usuarios no banco de dados
import api from '../../../ConnectApi'

//Function LoadingDatabaseAcoes
export default function ReloadingAcaoAtual({id}){
    
    const {setIsConnectedAcoes} = useContext(AuthContext);
    const {myUser} = useContext(AuthContext);
    
    //armazena todas as ações de TODOS OS COORDENADORES
    const {databaseAcoes, setDatabaseAcoes} = useContext(AuthContext); 
    
    //apenas ações do COORDENADOR ATUAL
    const {minhasAcoes, setMinhasAcoes} = useContext(AuthContext);
    const{setAcaoAtual} = useContext(AuthContext);

    const [errorConnection, setErrorConnection] = useState('');
    
    //inicializa
    setTimeout(()=>{ //só pra ficar bonito (hehehe) para mostrar o design da tela de loading
        connectDatabaseAcoes();
    }, 2000);

    //fará a conexão com o banco de dados
    async function connectDatabaseAcoes(){
            try{
                //pegando os usuários do banco de dados
                const response = await api.get("/acao");
                setDatabaseAcoes(response.data);
                setMinhasAcoes(armazenaAcao()); //reload das ações do coordenador
                setAcaoAtual(armazenaAcaoAtual(id)) //salva a ação atual (atualiza)
                setIsConnectedAcoes(true);
            }catch(err){
                console.error(err);
                setErrorConnection("Cheque sua conexão com a internet");
                setIsConnectedAcoes(false);
            }
    }//fim function connectDataBase
    
    //vai puxar as informações pelo nome do coordenador e atribuir a minhasAcoes
    function armazenaAcao(){
        let minhasAcoes=[];

        //databaseAcoes[i].coordenador === myUser.name
        for(let i=0; i<databaseAcoes.length;i++){
            if(databaseAcoes[i].coordenador === myUser.name){
                minhasAcoes.push(databaseAcoes[i]);
            }
        }
        
        return minhasAcoes;
    }

    function armazenaAcaoAtual(id){

        let acaoAtual='';

        for(let i=0; i<databaseAcoes.length;i++){
            if(databaseAcoes[i]._id === id){
                return databaseAcoes[i];
            }
        }
        
        return acaoAtual;
    }

    return(
        <View style= {styles.container}>
            {
                errorConnection===''?
                <Text style= {styles.text}>Calma, puxando as informações da Ação atual</Text>
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





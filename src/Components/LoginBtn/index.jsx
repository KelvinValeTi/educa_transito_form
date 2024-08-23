import React, {useContext, useState} from "react";
import { Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../Contexts/DataProvider";
import { useNavigation } from "@react-navigation/native";

//conectando a api de usuarios no banco de dados
import api from '../../ConnectApi';

export default function LoginBtn({user, password, navigation}){
    
    const {databaseUsers, setDatabaseUsers} = useContext(AuthContext);
    const {myUser, setMyUser} = useContext(AuthContext);

    //mensagem de erro
    const [errorMsg, setErrorMsg] = useState('');

    //fará a conexão com o banco de dados
    async function login(){
        if(databaseUsers === ""){
            try{
                //pegando os usuários do banco de dados
                const response = await api.get("/users");
                setDatabaseUsers(response.data);
                isValid(databaseUsers);
            }catch(err){
                console.error(err);
                setErrorMsg("erro de conexão "+err);
            }
        }else{
            isValid(databaseUsers);
        }
    }//fim function login
    
    //function isValid
    function isValid(databaseUsers){

        console.log('user: '+user+"//password: "+password)

        let userExists = false;

        if(user==='' || password ===''){
            //console.log('user vazio');
            Alert.alert('ATENÇÃO!!','Usuário e/ou Senha devem ser preenchidos!',[{text:'ok'}]);
        }else{
            for(let i=0; i<databaseUsers.length; i++){
                if(user === databaseUsers[i].user_login){
                    //console.log("-------------");
                    //console.log("usuário existe");
                    userExists= true;
    
                    if(password === databaseUsers[i].password){ //senha correta
                        //console.log("senha correta");
                        setMyUser(databaseUsers[i]);
                        navigation.navigate('DashboardUser');
                        break;
                    }else{
                       //console.log("Senha incorreta");
                       Alert.alert('ATENÇÃO!!','Senha INCORRETA!',[{text:'ok'}]);
                       setErrorMsg('Senha incorreta!');
                       break;
                    }
                }
            }
        }

        if(userExists==false && !(user==='' || password ==='')){
            //console.log('usuario não existe');
            Alert.alert('ATENÇÃO!!','Usuário NÃO existe!',[{text:'ok'}]);
            setErrorMsg('Usuário inexistente!');
        }

    }//fim function isValid() 

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





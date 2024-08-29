import React, {useContext} from "react";
import { Text, TouchableOpacity, StyleSheet, Alert} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from '../../../Contexts/DataProvider';


export default function LoginBtn({user, password, navigation}){
    
    const {databaseUsers, setDatabaseUsers} = useContext(AuthContext);
    const {setMyUser} = useContext(AuthContext);
    const {setIsConnectedAcoes} = useContext(AuthContext);

    //function isValid
    function isValid(databaseUsers){

        //test
        //console.log('user: '+user+"//password: "+password)

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
                        setIsConnectedAcoes(false); //vai obrigar o reload toda vez que muda de usuário
                        navigation.navigate('DashboardUser');
                        break;
                    }else{
                       //console.log("Senha incorreta");
                       Alert.alert('ATENÇÃO!!','Senha INCORRETA!',[{text:'ok'}]);
                       break;
                    }
                }
            }
        }

        if(userExists==false && !(user==='' || password ==='')){
            //console.log('usuario não existe');
            Alert.alert('ATENÇÃO!!','Usuário NÃO existe!',[{text:'ok'}]);
            
        }

    }//fim function isValid() 

    return(
        <TouchableOpacity 
            style ={styles.loginBtn}
            onPress={()=>isValid(databaseUsers)}
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





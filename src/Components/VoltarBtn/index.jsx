import React, {useContext} from "react";
import { Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../../Contexts/DataProvider";


export default function VoltarBtn({navigation}){
    
    return(
        <TouchableOpacity 
            style ={styles.voltarBtn}
            onPress={()=>navigation.goBack()}
        >
            <Image 
                style ={styles.icon}
                source={require('../../assets/arrow_back.png')}
            /> 
            {/** caso seja necessario dizer que isso é um botão de voltar
            <Text style ={styles.text}>Voltar</Text>
            */}
        </TouchableOpacity>
    );
}


/*STYLES*/
const styles = StyleSheet.create({
    voltarBtn:{
        width:'auto',
        flexDirection:'row',
        justifyContent:"start",
        alignItems:"center",
        gap:RFValue(10),
        marginTop:RFValue(20),
    },
    icon:{
        width: RFValue(40),
        height: RFValue(40),
    },
    text:{
        fontSize:RFValue(18),
        color:'#FFFFFF',
        fontFamily:"Inter_600SemiBold",
        textDecorationLine:'underline',
    }

});





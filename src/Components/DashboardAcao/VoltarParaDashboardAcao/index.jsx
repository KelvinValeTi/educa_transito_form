import React from "react";
import { TouchableOpacity, StyleSheet, Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default function VoltarBtn({navigation}){
    
    return(
        <TouchableOpacity 
            style ={styles.voltarBtn}
            onPress={()=>console.log('voltar para home')}
        >
            <Image 
                style ={styles.icon}
                source={require('../../../assets/arrow_back.png')}
            />
        </TouchableOpacity>
    );
}

/*STYLES*/
const styles = StyleSheet.create({
    voltarBtn:{
        width:RFValue(300),
        alignItems:"left",
        gap:RFValue(10),
        marginTop:RFValue(20),
    },
    icon:{
        width: RFValue(40),
        height: RFValue(40),
    },

});





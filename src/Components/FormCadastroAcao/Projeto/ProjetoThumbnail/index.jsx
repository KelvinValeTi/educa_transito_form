import React from "react";
import { Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default function ProjetoThumbnail({nomeProjeto, setProjeto, setOpenProjeto}){
    
    return(
        <TouchableOpacity
            style={styles.projeto}
            onPress={()=>{
                setOpenProjeto(false);
                setProjeto(nomeProjeto);
            }}
        >
            <Text style={styles.nomeProjeto}>{nomeProjeto}</Text>
            <Image 
                source={require('../../../../assets/add_icon.png')}
                style={styles.icon}
            />
        </TouchableOpacity>
           
    );
}

const styles = StyleSheet.create({
    projeto:{
        width:RFValue(300),
        backgroundColor: '#C6632C',
        borderRadius:RFValue(20),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:RFValue(20),
        paddingVertical:RFValue(5),
        
        marginBottom:RFValue(10)
    },
    nomeProjeto:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_700Bold",
        textAlign:'left',

        width:RFValue(200)
    },

});



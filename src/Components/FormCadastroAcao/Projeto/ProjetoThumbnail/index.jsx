import React, {useState} from "react";
import { Text, Image, TouchableOpacity, StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


export default function ProjetoThumbnail({nomeProjeto, setProjeto, setOpenProjeto}){
    
    const [selected, setSelected] = useState(false);

    return(
        <TouchableOpacity
            style={styles.projeto(selected)}
            onPress={()=>{
                setSelected(true);
                setTimeout(()=>{
                    setOpenProjeto(false);
                    setProjeto(nomeProjeto);
                },1000);
            }}
        >
            <Text style={styles.nomeProjeto}>{nomeProjeto}</Text>
            <Image 
                source={require('../../../../assets/arrow_forward.png')}
                style={styles.icon}
            />
        </TouchableOpacity>
           
    );
}

const styles = StyleSheet.create({
    projeto: selected=>({
        width:RFValue(300),
        backgroundColor: selected? '#5AA93F':'#C6632C',
        borderRadius:RFValue(20),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:RFValue(20),
        paddingVertical:RFValue(5),
        
        marginBottom:RFValue(10)
    }),
    nomeProjeto:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_700Bold",
        textAlign:'left',

        width:RFValue(200)
    },

});



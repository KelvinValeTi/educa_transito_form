import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { View, Image, Text, StyleSheet} from "react-native";

export default function LoadingAnimation({text}){

    //user
    const user = 'Estou me conectando à base de dados'

    return(
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require('../../../assets/loading.png')}
            />
            <Text style={styles.espere}>Só um momento...</Text>
            <Text style={styles.text}>{text}...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',

    },
    img:{
        width:RFValue(300),
        height:RFValue(400),
    },
    espere:{
        color:'#FFFFFF',
        fontSize:RFValue(35),
        fontFamily:"Lobster_400Regular",
        textAlign:'center',
    },
    text:{
        color:'#FFFFFF',
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
        width:RFValue(250),
        textAlign:'center',
        marginTop:RFValue(20)
    }
});
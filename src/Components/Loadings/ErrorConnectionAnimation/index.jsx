import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { View, Image, Text, TouchableOpacity, BackHandler, StyleSheet} from "react-native";

export default function ErrorConnectionAnimation({error}){

    //user
    const user = 'Estou me conectando à base de dados'

    return(
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require('../../../assets/error_connect.png')}
            />
            <Text style={styles.espere}>Não foi possivel conectar!</Text>
            <Text style={styles.text}>{error}</Text>

            <TouchableOpacity 
                onPress={()=>{
                    BackHandler.exitApp();
                }}
                style= {styles.btn}
            >
                <Text  style= {styles.textBtn}>Sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:RFValue(40),
    },
    img:{
        width:RFValue(350),
        height:RFValue(320),
    },
    espere:{
        color:'#FFFFFF',
        fontSize:RFValue(35),
        fontFamily:"Inter_700Bold",
        textAlign:'center',
    },
    text:{
        color:'#FFFFFF',
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
        width:RFValue(250),
        textAlign:'center',
        marginTop:RFValue(20)
    },
    btn:{
        marginVertical:RFValue(30),
        backgroundColor:'#C62C2C',
        width:'auto',
        height:'auto',
        paddingVertical:RFValue(5),
        paddingHorizontal:RFValue(10),
        borderRadius:RFValue(10),
        
    },
    textBtn:{
        fontSize:RFValue(25),
        fontFamily:"Inter_700Bold",
        color:"#FFFFFF",
        textAlign:'center'
    }
});
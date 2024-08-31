import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(20),
        width:RFValue(300),
        gap:RFValue(10)
    },
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_700Bold",
        textAlign:'center',
    },
    lista:{
        width:RFValue(300),
        height:RFValue(300),
        borderRadius:RFValue(24),
        padding:RFValue(15),
        backgroundColor:'#FFFFFF',
    },

    parceiro:{
        width:'auto',
        height:'auto',
        borderBottomColor:'#4A75E4',
        borderBottomWidth:RFValue(2),
        paddingBottom:RFValue(3),
        marginTop:RFValue(5),

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    parceiroText:{
        width:RFValue(230),
        fontFamily:'Inter_600SemiBold',
        fontSize:RFValue(18),
    },
    excluirIcon:{
        width:RFValue(25),
        height:RFValue(25),
    }


});


export default styles;
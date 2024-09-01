import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(20),
        width:RFValue(300),
        gap:RFValue(5)
    },
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_700Bold",
        textAlign:'left',
        paddingLeft:RFValue(15),
    },
    observacao:{
        width:RFValue(280),
        height:RFValue(200),
        backgroundColor:"#FFFFFF",
        marginHorizontal:RFValue(5),
        borderRadius:RFValue(20),
        padding:RFValue(20),
        gap:RFValue(10)
    },

    observacaoText:{
        width:'auto',
        fontFamily:'Inter_600SemiBold',
        fontSize:RFValue(14),
    },
    titleContainer:{
        width: 'auto',
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center'
    },
    observacaoTitle:{
        color:'#C62C2C',
        width:'auto',
        fontFamily:'Inter_600SemiBold',
        fontSize:RFValue(18),
    },
    icon:{
        width:RFValue(25),
        height:RFValue(25),
    }


});


export default styles;
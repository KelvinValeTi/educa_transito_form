import {StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#23252B',
        justifyContent:"center",
        alignItems: "center",
        gap:RFValue(20)
    },
    relatorio:{
        marginTop:RFValue(30),
        backgroundColor:'#C6632C',
        width:RFValue(300),
        height:RFValue(200),
        borderRadius:RFValue(10),
        padding:RFValue(15)
    },
    titleProjeto:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(20),
        textAlign:'center'
    },
    underlineDecor:{
        width:RFValue(270),
        height:RFValue(2),
        backgroundColor:"#FFFFFF",
        alignSelf:'center',
        marginVertical:RFValue(5),
    },
    descricao:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(14),
    },
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    btn:{
        backgroundColor:'blue',
        width:RFValue(100),
        height:50,
        marginBottom:60
    },
    textBtn:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(14),
    }

});

export default styles;


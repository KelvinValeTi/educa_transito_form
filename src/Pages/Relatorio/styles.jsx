import {StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#23252B',
        justifyContent:"center",
        alignItems: "center",
    },
    btnBox:{
        width:RFValue(300),

        marginBottom:RFValue(40),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    text:{
        marginTop:RFValue(80),
        fontSize:RFValue(20),
        color:'#FFFFFF',
        fontFamily:'Inter_800ExtraBold',
    },

});

export default styles;


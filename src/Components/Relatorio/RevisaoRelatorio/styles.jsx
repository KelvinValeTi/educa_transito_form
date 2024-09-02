import {StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        width:RFValue(300),
        height:RFValue(300),
        backgroundColor:"#C6632C",
        marginTop:RFValue(10),
        marginBottom:RFValue(50),
        paddingHorizontal:RFValue(12),
        paddingVertical:RFValue(10),
        borderRadius:RFValue(12)
    },
    textBold:{
        fontSize:RFValue(14),
        color:'#FFFFFF',
        fontFamily:'Inter_800ExtraBold',
    },
    text:{
        fontSize:RFValue(14),
        color:'#FFFFFF',
        fontFamily:'Inter_500Medium',
    }

});

export default styles;


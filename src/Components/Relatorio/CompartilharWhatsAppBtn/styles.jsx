import {StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#5AA93F',
        width:RFValue(180),
        height:RFValue(50),
        borderRadius:RFValue(12),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:RFValue(5)
    },
    textBtn:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(20),
    },
    icon:{
        width:RFValue(30),
        height:RFValue(30),
    }

});

export default styles;


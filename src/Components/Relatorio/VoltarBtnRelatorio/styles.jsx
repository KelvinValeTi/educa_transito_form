import {StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#C6632C',
        width:RFValue(130),
        height:RFValue(60),
        borderRadius:RFValue(12),
        alignItems:'center',
        justifyContent:'center',
        gap:RFValue(5)
    },
    textBtn:{
        color:'#FFFFFF',
        fontFamily:'Inter_700Bold',
        fontSize: RFValue(20),
    },

});

export default styles;


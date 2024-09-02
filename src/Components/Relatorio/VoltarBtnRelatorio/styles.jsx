import {StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#2C8EC6',
        width:RFValue(90),
        height:RFValue(50),
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


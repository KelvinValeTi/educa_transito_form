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
        paddingLeft:RFValue(15)
    },
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
    input:{
        backgroundColor:'#FFFFFF',
        width:RFValue(250),
        height:RFValue(40),
        borderRadius:RFValue(24),
        paddingLeft:RFValue(20),
        textAlign:'left',
        fontFamily:"Inter_500Medium",
    },
    addBtn:{
        backgroundColor:'#C6632C',
        width:RFValue(40),
        height:RFValue(40),
        borderRadius:RFValue(10),
        justifyContent:'center',
        alignItems:'center'
    },
    addIcon:{
        width:RFValue(30),
        height:RFValue(30),
    },
});


export default styles;
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(20),
        width:RFValue(300),
    },
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_700Bold",
        textAlign:'left',
        paddingLeft:RFValue(15),
        marginVertical:RFValue(5),
    },
    input:{
        backgroundColor:'#FFFFFF',
        width:'auto',
        height:RFValue(170),
        borderTopLeftRadius:RFValue(24),
        borderTopRightRadius:RFValue(24),
        paddingHorizontal:RFValue(20),
        textAlign:'left',
        fontFamily:"Inter_500Medium",
        fontSize:RFValue(14),
    },
    addBtn:{
        backgroundColor:'#C6632C',
        width:'auto',
        height:RFValue(40),
        borderBottomLeftRadius:RFValue(24),
        borderBottomRightRadius:RFValue(24),
        justifyContent:'center',
        alignItems:'center'
    },
    addIcon:{
        width:RFValue(30),
        height:RFValue(30),
    },
});


export default styles;
import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#23252B",
        justifyContent:"center",
        alignItems: "center",

    },
    subContainer:{
        marginBottom:RFValue(40),
    },
    userPasswordTitle:{
        color:"#ffffff",
        fontSize: RFValue(14),
        fontFamily:"Inter_700Bold",
        paddingTop:RFValue(8),
    },
    input:{
        borderBottomColor:"#ffffff",
        borderBottomWidth:2,
        width:RFValue(220),
        height:RFValue(30),
        color:"#ffffff",
        fontSize:RFValue(14),

        paddingLeft:RFValue(5),
        textAlign:"center",
    },
    btn:{
        backgroundColor:"#C6632C",
        borderRadius:12,
        marginBottom:RFValue(10),
        marginTop:RFValue(20),
        width:RFValue(220),
        height:RFValue(40),
        
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center"
    },
    textBtn:{
        color:"#23252B",
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
    },

});

export default styles;


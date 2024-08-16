import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#23252B",
        justifyContent:"flex-end",
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

});

export default styles;


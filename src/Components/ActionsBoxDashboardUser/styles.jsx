import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    actionBoxContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:RFValue(40),

        marginVertical:RFValue(20)
    },
    actionBtn:{
        justifyContent:"center",
        alignItems:"center",
        gap:RFValue(5),
    },
    icon:{
        width:RFValue(70),
        height:RFValue(70)
    },
    description:{
        color:"#ffffff",
        fontFamily:"Inter_700Bold",
        fontSize:RFValue(16)
    },
});

export default styles;


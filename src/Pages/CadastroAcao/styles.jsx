import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#23252B",
        alignItems: "center",
    },
    title:{
        color:"#FFFFFF",
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
        marginTop:RFValue(50)
    },

});

export default styles;


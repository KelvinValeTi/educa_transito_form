import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        backgroundColor: "#23252B",
    },
    title:{
        color:"#FFFFFF",
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
        marginTop:RFValue(50),
        textAlign:'center'
    },

});

export default styles;


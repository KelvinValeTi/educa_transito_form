import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        backgroundColor: "#23252B",
        alignItems:'center',
        paddingTop:RFValue(20),
    },
    title:{
        color:"#FFFFFF",
        fontSize:RFValue(24),
        fontFamily:"Inter_700Bold",
        textAlign:'center'
    },
    underlineDecor:{
        backgroundColor:'#C6632C',
        width:RFValue(70),
        height:RFValue(3),
        alignSelf:'center'
    }
});

export default styles;


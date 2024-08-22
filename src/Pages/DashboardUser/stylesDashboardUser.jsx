import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#23252B",
        alignItems: "center",
    },

    titleContainer:{
        marginVertical:RFValue(10),
        alignItems:'center',
    },
    titleText:{
        color:'#ffffff',
        fontSize:RFValue(18),  
        fontFamily:"Inter_700Bold",
    },
    underlineDecor:{
        backgroundColor:'#C6632C',
        width:RFValue(80),
        height:RFValue(3),
    },
});

export default styles;


import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    acaoThumbnail:{
        justifyContent:'center',
        gap:RFValue(5),
        
        backgroundColor:'#5AA93F',
        borderRadius:RFValue(8),

        width: RFValue(320),
        height: "auto",

        padding: RFValue(10),

        marginVertical:RFValue(5),
    },
    projeto:{
        color:'#fff',
        fontFamily:"Inter_700Bold",
        fontSize:RFValue(16),
        textAlign:"center"
    },
    local:{
        color:'#fff',
        fontFamily:"Inter_400Regular",
        fontSize:RFValue(14),
        textAlign:"left",
    },
    dataAcao:{
        color:'#fff',
        fontFamily:"Inter_400Regular",
        fontSize:RFValue(14),
        textAlign:"right",
    }

});

export default styles;


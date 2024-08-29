import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    userInfoBox:{
        backgroundColor:"#C6632C",
        width: RFValue(320),
        height: RFValue(130),
        borderRadius: RFValue(20),

        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:RFValue(10),

        marginTop:RFValue(50),
        
        paddingVertical:RFValue(10),
    },
    userInfoBoxSubContainer:{
        width:RFValue(200),
    },
    imageContainer:{
        borderRadius:50,
        width:RFValue(80),
        height:RFValue(80),
    },
    userInfoName:{
        color:"#ffffff",
        fontSize:RFValue(20),
        fontFamily:"Inter_800ExtraBold",
        marginBottom:RFValue(10),
        textTransform:'capitalize',
    },
    userInfoParagraph:{
        color:"#ffffff",
        textAlign:"left",
        fontSize:RFValue(13),
        fontFamily:"Inter_700Bold",
        lineHeight:RFValue(15),
        textTransform:'capitalize',
    }

});

export default styles;


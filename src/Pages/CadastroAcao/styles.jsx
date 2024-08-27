import { StyleSheet} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        backgroundColor: "#23252B",
        alignItems:'center',
        paddingTop:RFValue(20)
    },
    title:{
        color:"#FFFFFF",
        fontSize:RFValue(20),
        fontFamily:"Inter_700Bold",
        marginTop:RFValue(50),
        marginBottom:RFValue(30),
        textAlign:'center'
    },  
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_600SemiBold",
        textAlign:'left',
        paddingLeft:RFValue(15),
        marginBottom: RFValue(5)
    },
    twoColumsView:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'auto',
    },

    btn:{
        backgroundColor:'#ffffff',
        width:RFValue(300),
        height: RFValue(40),
        borderRadius:RFValue(8),
        alignItems:'center',
        justifyContent:'center'
    },
    textBtn:{
        fontSize:RFValue(18),
        fontFamily:'Inter_600SemiBold',
        color: '#23252B'

    }


});

export default styles;


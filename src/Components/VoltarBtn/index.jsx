import React, {useContext} from "react";
import { Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { StackActions } from '@react-navigation/native';
import { AuthContext } from "../../Contexts/DataProvider";


export default function VoltarBtn({navigation, voltaDuasStacks}){
    
    const {setIsConnectedAcoes} = useContext(AuthContext);

    return(
        <TouchableOpacity 
            style ={styles.voltarBtn}
            onPress={()=>{
                        setIsConnectedAcoes(false); //forçar o reload das ações
                        if(voltaDuasStacks){
                            const popAction = StackActions.pop(2);
                            navigation.dispatch(popAction);                            
                        }else{
                            navigation.goBack();
                        }
                    }
                }
        >
            <Image 
                style ={styles.icon}
                source={require('../../assets/arrow_back.png')}
            />
        </TouchableOpacity>
    );
}


/*STYLES*/
const styles = StyleSheet.create({
    voltarBtn:{
        width:RFValue(300),
        alignItems:"left",
        gap:RFValue(10),
        marginTop:RFValue(20),
    },
    icon:{
        width: RFValue(40),
        height: RFValue(40),
    },

});





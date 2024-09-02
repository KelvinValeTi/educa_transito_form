import React, {useContext, useState} from "react";
import { Text, TouchableOpacity, Share, Alert, Image} from "react-native";
import { AuthContext } from "../../../Contexts/DataProvider";

import styles from "./styles";

export default function VoltarBtnRelatorio({navigation}){
    
    //----------- return
    return(
            <TouchableOpacity 
                style={styles.btn}
                onPress={()=>{
                  navigation.goBack();
                }}
            >
                <Text style={styles.textBtn}>Voltar</Text>
            </TouchableOpacity>
    );
}

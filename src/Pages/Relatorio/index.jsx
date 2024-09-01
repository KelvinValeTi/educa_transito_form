import React, {useContext, useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, Share, Alert} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import CompartilharWhatsAppBtn from "../../Components/Relatorio/CompartilharWhatsAppBtn";

import styles from "./styles";



export default function Relatorio({navigation}){
    
  const {isConnectedUsers} = useContext(AuthContext);

  return(
    <View style={styles.container}>
      {/**preview do relatorio com as info */}
      <CompartilharWhatsAppBtn></CompartilharWhatsAppBtn>
    </View>
        
    );
}

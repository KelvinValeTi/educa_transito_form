import React, {useContext, useState} from "react";
import {View} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import CompartilharWhatsAppBtn from "../../Components/Relatorio/CompartilharWhatsAppBtn";
import VoltarBtnRelatorio from "../../Components/Relatorio/VoltarBtnRelatorio";

import styles from "./styles";

export default function Relatorio({navigation}){
    
  const {isConnectedUsers} = useContext(AuthContext);
  const {acaoAtual} = useContext(AuthContext);
  

  console.log()

  return(
    <View style={styles.container}>
      {/**preview do relatorio com as info */}
      <CompartilharWhatsAppBtn 
        acaoAtual={acaoAtual}
      />
      

      <VoltarBtnRelatorio
        navigation={navigation}
      />
    </View>
        
    );
}

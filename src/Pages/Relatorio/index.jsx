import React, {useContext, useState} from "react";
import {View, Text} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import RevisaoRelatorio from "../../Components/Relatorio/RevisaoRelatorio";
import CompartilharWhatsAppBtn from "../../Components/Relatorio/CompartilharWhatsAppBtn";
import VoltarBtnRelatorio from "../../Components/Relatorio/VoltarBtnRelatorio";


import styles from "./styles";

export default function Relatorio({navigation}){
    
  const {acaoAtual} = useContext(AuthContext);

  

  //----- RETURN
  return(
    <View style={styles.container}>

      <Text style={styles.text}>Que tal revisar os dados?</Text>
      {/**preview do relatorio com as info */}
      <RevisaoRelatorio 
        acaoAtual={acaoAtual}
      />

      <View style={styles.btnBox}>
        <VoltarBtnRelatorio
          navigation={navigation}
        />

        <CompartilharWhatsAppBtn 
          acaoAtual={acaoAtual}
        />
      </View> 
      
    </View>
        
    );
}

import React, {useContext, useEffect} from "react";
import { View, Text, Alert, BackHandler} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";
import styles from "./styles";

import VoltarBtn from "../../Components/VoltarBtn";
import AcaoInfoBox from "../../Components/DashboardAcao/AcaoInfoBox";
import BtnOptions from "../../Components/DashboardAcao/BtnOptions";


export default function DashboardAcao({navigation}){

  const {isConnectedAcoes, setIsConnectedAcoes} = useContext(AuthContext);  
  const backBtnVisible = true;

  /**
   * prevenindo que o usuário use o botão do android para voltar (POG)
   * 
   * enquanto o react navigation não atualiza o gestureEnabled que só está funcionando em iOS
   */
  React.useEffect(() => {
    const onBackPress = () => {
      return true; 
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBackPress
    );

    return () => backHandler.remove();
  }, []);
  // fim do gestureEnabled improvisado da documentação do react navigation

  return(
    <View style={styles.container}>

      {
        backBtnVisible? //só é visivel se vier de DashBoardUser
          <VoltarBtn navigation={navigation} />
          :
          <></>
      }
        <AcaoInfoBox />

        <BtnOptions 
            title={'Editar dados obrigatorios'}
            isEmpty={false}
        /> 
        
        <BtnOptions 
            title={'Frequência'}
            isEmpty={true}
        />  

        <BtnOptions 
            title={'Parceiros'}
            isEmpty={true}
        />   
        
        <BtnOptions 
            title={'Observações'}
            isEmpty={true}
        />  

        <BtnOptions 
            title={'Fotos'}
            isEmpty={true}
        />  

    </View>
            
  );
}



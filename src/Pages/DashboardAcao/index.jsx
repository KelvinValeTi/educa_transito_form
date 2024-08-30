import React, {useContext} from "react";
import { View, BackHandler, ScrollView} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";
import styles from "./styles";

import VoltarBtn from "../../Components/VoltarBtn";
import AcaoInfoBox from "../../Components/DashboardAcao/AcaoInfoBox";
import BtnOptions from "../../Components/DashboardAcao/BtnOptions";
import GerarRelatorioBtn from "../../Components/DashboardAcao/GerarRelatorioBtn";

import ReloadingAcaoAtual from "../../Components/Loadings/ReloadingAcaoAtual";


export default function DashboardAcao({navigation, route}){

  const {acaoAtual} = useContext(AuthContext);
  const {isConnectedAcoes} = useContext(AuthContext);
  
  /**
   * prevenindo que o usuário use o botão do android para voltar (POG)
   * 
   * enquanto o react navigation não atualiza o gestureEnabled que só está funcionando em iOS
   */
  //console.log(acaoAtual);

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


  /**um loading ação bem aqui*/

  return(
    <>
    {
      !isConnectedAcoes?
      <ReloadingAcaoAtual 
        id={acaoAtual._id}
      />
      :
      <View style={styles.container}>

        <VoltarBtn 
          navigation={navigation}
          voltaDuasStacks={route.params.voltaDuasStacks} 
          acaoAtual={{acaoAtual}}
        />

      <ScrollView>

        <AcaoInfoBox />

        <BtnOptions 
          title={'Editar dados obrigatorios'}
          isEmpty={false}
          navigation={navigation}
        /> 
        
        <BtnOptions 
          title={'Frequência'}
          isEmpty={true}
          navigation={navigation}
        />  

        <BtnOptions 
          title={'Parceiros'}
          isEmpty={true}
          navigation={navigation}
        />   
        
        <BtnOptions 
          title={'Observações'}
          isEmpty={true}
          navigation={navigation}
        />        

        <GerarRelatorioBtn 
          navigation={navigation}
        />
      </ScrollView>

    </View>

    }    
    </>
  );
}



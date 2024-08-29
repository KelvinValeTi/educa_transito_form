import React, {useContext} from "react";
import { View, Text, Alert, BackHandler} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";
import styles from "./stylesDashboardUser";

import UserInfoBox from "../../Components/UserInfoBox";
import ActionsBoxDashboardUser from "../../Components/ActionsBoxDashboardUser";
import UltimasAcoes from "../../Components/UltimasAcoes";
import LoadingDatabaseAcoes from "../../Components/LoadingDatabaseAcoes";


export default function DashboardUser({navigation}){

  const {isConnectedAcoes, setIsConnectedAcoes} = useContext(AuthContext);
  
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
    <>
      {
        !isConnectedAcoes?
        <LoadingDatabaseAcoes />
        :
        <View style={styles.container}>
          <UserInfoBox />
          
          <ActionsBoxDashboardUser 
            navigation = {navigation}
          />

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>ÚLTIMAS AÇÕES</Text>
            <View style={styles.underlineDecor}/>
          </View>  

          <UltimasAcoes 
            navigation={navigation} 
          />

        </View>
            
      }
    </>
  );
}



import React, {useContext} from "react";
import { View, Text, TouchableOpacity, ScrollView} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import styles from "./stylesDashboardUser";

import UserInfoBox from "../../Components/UserInfoBox";
import ActionsBoxDashboardUser from "../../Components/ActionsBoxDashboardUser";
import UltimasAcoes from "../../Components/UltimasAcoes";
import LoadingDatabaseAcoes from "../../Components/LoadingDatabaseAcoes";


export default function DashboardUser(){

  const {isConnectedAcoes} = useContext(AuthContext);

  return(
    <>
      {
        !isConnectedAcoes?
        <LoadingDatabaseAcoes />
        :
        <View style={styles.container}>
          <UserInfoBox />
          
          <ActionsBoxDashboardUser />

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>ÚLTIMAS AÇÕES</Text>
            <View style={styles.underlineDecor}/>
          </View>  

          <UltimasAcoes></UltimasAcoes>

        </View>
            
      }
    </>
  );
}



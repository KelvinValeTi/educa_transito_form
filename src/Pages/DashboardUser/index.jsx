import React from "react";
import { View, Text, TouchableOpacity, ScrollView} from "react-native";

import styles from "./stylesDashboardUser";

import UserInfoBox from "../../Components/UserInfoBox";
import ActionsBoxDashboardUser from "../../Components/ActionsBoxDashboardUser";
import UltimasAcoes from "../../Components/UltimasAcoes";

export default function DashboardUser(){

    return(
        <View style={styles.container}>
          <UserInfoBox />
          
          <ActionsBoxDashboardUser />

          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>ÚLTIMAS AÇÕES</Text>
            <View style={styles.underlineDecor}/>
          </View>  

          <UltimasAcoes></UltimasAcoes>

        </View>
    );
}



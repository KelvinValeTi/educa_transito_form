import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

import styles from "./stylesDashboardUser";

import UserInfoBox from "../../Components/UserInfoBox";
import ActionsBoxDashboardUser from "../../Components/ActionsBoxDashboardUser";

export default function DashboardUser(){

    return(
        <View style={styles.container}>
          <UserInfoBox />
          
          <ActionsBoxDashboardUser />
        </View>
    );
}



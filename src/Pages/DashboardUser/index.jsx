import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

import styles from "./stylesDashboardUser";

import UserInfoBox from "../../Components/UserInfoBox";

export default function DashboardUser(){

    return(
        <View style={styles.container}>
          <UserInfoBox />

        </View>
    );
}



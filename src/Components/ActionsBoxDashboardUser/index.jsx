import React from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";

import styles from "./styles";

export default function ActionsBoxDashboardUser(){

    return(
            <View style={styles.actionBoxContainer}>

                <TouchableOpacity style={styles.actionBtn}>
                    <Image
                        style={styles.icon} 
                        source={require('../../assets/add_icon.png')} 
                    />
                    <Text style={styles.description}>Nova Ação</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionBtn}>
                    <Image
                        style={styles.icon} 
                        source={require('../../assets/sair_icon.png')} 
                    />
                    <Text style={styles.description}>Sair/ Logout</Text>
                </TouchableOpacity>
            </View>
    );
}



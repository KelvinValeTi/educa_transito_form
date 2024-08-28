import React, {useContext} from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import styles from "./styles";

export default function ActionsBoxDashboardUser({navigation}){
    const {isConnectedUsers, setIsConnectedUsers} = useContext(AuthContext);
    const {setMyUser} = useContext(AuthContext);

    return(
            <View style={styles.actionBoxContainer}>

                <TouchableOpacity 
                    style={styles.actionBtn}
                    onPress={()=>{
                        navigation.navigate('CadastroAcao');
                    }}
                >
                    <Image
                        style={styles.icon} 
                        source={require('../../assets/add_icon.png')} 
                    />
                    <Text style={styles.description}>Nova Ação</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                     onPress={()=>{
                        setMyUser('');
                        setIsConnectedUsers(false);
                        navigation.goBack();
                    }} 
                    style={styles.actionBtn}
                >
                    <Image
                        style={styles.icon} 
                        source={require('../../assets/sair_icon.png')}
                    />
                    <Text style={styles.description}>Sair/ Logout</Text>
                </TouchableOpacity>
            </View>
    );
}



import React, {useContext} from "react";
import { View, Text, TouchableOpacity, Image, Alert} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import styles from "./styles";

export default function UserInfoBox(){
    
    const {myUser} = useContext(AuthContext);    

    return(
        
            <View style={styles.userInfoBox}>
                <TouchableOpacity onPress={()=>
                    Alert.alert('ATENÇÃO!!','Ainda falta implementar a troca de foto',[{text:'ok'}])
                    }
                >
                    <Image
                        style={styles.imageContainer} 
                        source={require('../../assets/foto_perfil_default.png')} 
                    />
                </TouchableOpacity>

                <View style={styles.userInfoBoxSubContainer}>
                    <Text style={styles.userInfoName}>Olá {myUser.name}</Text>
                    <Text style={styles.userInfoParagraph}>{myUser.cargo}</Text>
                    <Text style={styles.userInfoParagraph}>{myUser.lotacao}</Text>
                </View>
            </View>
    );
}



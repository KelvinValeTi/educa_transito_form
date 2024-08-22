import React from "react";
import { View, Text, TouchableOpacity, Image} from "react-native";

import styles from "./styles";

export default function UserInfoBox(){
    
    //DB TEMP
    const name = 'Rafael Cunha';
    const cargo = 'Assistente de Trânsito';
    const setor = 'Educação para o Trânsito';
    const lotacao = 'Detran Sede';

    return(
            <View style={styles.userInfoBox}>
                <TouchableOpacity>
                    <Image
                        style={styles.imageContainer} 
                        source={require('../../assets/foto_perfil_default.png')} 
                    />
                </TouchableOpacity>

                <View style={styles.userInfoBoxSubContainer}>
                    <Text style={styles.userInfoName}>Olá {name}</Text>
                    <Text style={styles.userInfoParagraph}>{cargo}</Text>
                    <Text style={styles.userInfoParagraph}>{setor}</Text>
                    <Text style={styles.userInfoParagraph}>{lotacao}</Text>
                </View>
            </View>
    );
}



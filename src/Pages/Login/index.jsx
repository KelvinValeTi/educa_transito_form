import React, {useContext, useState} from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import styles from "./styles";

//components
import LoginBtn from '../../Components/LoginPage/LoginBtn'
import ForgetPasswordBtn from "../../Components/LoginPage/ForgetPasswordBtn";

import LoadingDatabaseUsers from "../../Components/Loadings/LoadingDatabaseUsers";

export default function Login({navigation}){
    
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const {isConnectedUsers} = useContext(AuthContext);

    return(
        <>
        {
            !isConnectedUsers ?
                <LoadingDatabaseUsers /> 
                :
                <View style={styles.container}>
                    <ImageBackground
                        source={require('../../assets/login_page.jpg')}
                        resizeMode="cover"
                        style={styles.imageBackground}
                    >

                    <View style={styles.subContainer}>
                        <Text style ={styles.userPasswordTitle}>Usuário:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setUser}
                            value={user}
                            autoCapitalize="none"
                        />
        
                        <Text style ={styles.userPasswordTitle}>Senha:</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            autoCapitalize="none"
                        />
                
                        <LoginBtn
                            user={user}
                            password={password}
                            navigation = {navigation}
                        />
                
                        <ForgetPasswordBtn navigation = {navigation} />
                    </View>
                    </ImageBackground>
                </View>
        }
        </>
        
    );
}



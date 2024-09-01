import React, {useState, useContext} from "react";
import { View, Text} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import styles from "./styles";

import InputObservacoes from "../../Components/Observacoes/InputObservacoes";
import ListaObservacoes from "../../Components/Observacoes/ListaObservacoes";
import AtualizarObservacoesBtn from "../../Components/Observacoes/AtualizarObservacoesBtn";

import VoltarBtn from "../../Components/VoltarBtn";

//function Parceiros
export default function Observacoes({navigation}){

    const {acaoAtual} = useContext(AuthContext);

    //variavel que controla o refresh da flatlist
    const [isRefreshing, setIsRefreshing] = useState(false);


    //dados para teste
    const initTest = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]

    const [observacoes, setObservacoes] = useState(initTest);

    return(
        <View
            style={styles.container} 
        >       
            <VoltarBtn 
                navigation={navigation}
            /> 
            
            <Text style={styles.title}>Observações</Text>
            <View style={styles.underlineDecor} /> 

            <InputObservacoes 
                dataArray={observacoes}
                setDataArray ={setObservacoes}
                setIsRefreshing ={setIsRefreshing}
            />

            <ListaObservacoes 
                dataArray = {observacoes}
                setDataArray = {setObservacoes}
            />


{/** 
            <AtualizarObservacoesBtn
                navigation={navigation}
                dataArray={parceiros} //por alguma razão os nomes das props da mesma pagina precisam ser iguais
                id = {acaoAtual._id}
            />
*/}
        </View>
    );
}



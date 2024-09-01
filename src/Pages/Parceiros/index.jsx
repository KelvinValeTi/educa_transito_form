import React, {useState, useContext} from "react";
import { View, Text} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import styles from "./styles";

import InputParceiroFrequencia from "../../Components/ParceirosFrequencia/InputParceiroFrequencia";
import ListaParceirosFrequencia from "../../Components/ParceirosFrequencia/ListaParceirosFrequencia";
import AtualizarParceirosBtn from "../../Components/ParceirosFrequencia/AtualizarParceirosBtn";

import VoltarBtn from "../../Components/VoltarBtn";

//function Parceiros
export default function Parceiros({navigation}){

    const {acaoAtual} = useContext(AuthContext);

    //variavel que controla o refresh da flatlist
    const [isRefreshing, setIsRefreshing] = useState(false);

    const [parceiros, setParceiros] = useState(acaoAtual.parceiros);

    return(
        <View
            style={styles.container} 
        >       
            <VoltarBtn 
                navigation={navigation}
                voltaDuasStacks={false}
            /> 
            
            <Text style={styles.title}>Parceiros</Text>
            <View style={styles.underlineDecor} /> 

            <InputParceiroFrequencia 
                label={'Parceiro'}
                placeholder={'Digite o nome do parceiro'}
                dataArray={parceiros}
                setDataArray ={setParceiros}
                setIsRefreshing ={setIsRefreshing}
            />

            <ListaParceirosFrequencia 
                label={'Parceiros Atuais'}
                dataArray = {parceiros}
                setDataArray = {setParceiros}
            />

            <AtualizarParceirosBtn
                navigation={navigation}
                dataArray={parceiros} //por alguma razão os nomes das props da mesma pagina precisam ser iguais
                id = {acaoAtual._id}
            />

        </View>
    );
}



import React, {useState, useContext} from "react";
import { View, Text} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import styles from "./styles";

import InputParceiroFrequencia from "../../Components/ParceirosFrequencia/InputParceiroFrequencia";
import ListaParceirosFrequencia from "../../Components/ParceirosFrequencia/ListaParceirosFrequencia";
import AtualizarFrequenciaBtn from "../../Components/ParceirosFrequencia/AtualizarFrequenciaBtn";

import VoltarBtn from "../../Components/VoltarBtn";

//function Parceiros
export default function Frequencia({navigation}){

    const {acaoAtual} = useContext(AuthContext);

    //variavel que controla o refresh da flatlist
    const [isRefreshing, setIsRefreshing] = useState(false);

    const [frequencia, setFrequencia] = useState(acaoAtual.equipe);

    return(
        <View
            style={styles.container} 
        >       
            <VoltarBtn 
                navigation={navigation}
                voltaDuasStacks={false}
            /> 
            
            <Text style={styles.title}>Frequência</Text>
            <View style={styles.underlineDecor} /> 

            <InputParceiroFrequencia 
                label={'Frequência'}
                placeholder={'Insira o nome da pessoa'}
                dataArray={frequencia}
                setDataArray ={setFrequencia}
                setIsRefreshing ={setIsRefreshing}
            />

            <ListaParceirosFrequencia 
                label={'Frequência Atual'}
                dataArray = {frequencia}
                setDataArray = {setFrequencia}
            />

            <AtualizarFrequenciaBtn
                navigation={navigation}
                dataArray={frequencia} //por alguma razão os nomes das props da mesma pagina precisam ser iguais
                id = {acaoAtual._id}
            />


        </View>
    );
}



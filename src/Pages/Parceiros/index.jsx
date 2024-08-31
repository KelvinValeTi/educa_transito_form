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
    //fazer um useState para atualizar dinamicamente esta pagina

    //dados para teste
    const [parceiros, setParceiros] = useState(["Auto escola João de Barro", "Policia Militar", "Secretária da Mulher","Auto escola João de Barro","Auto escola João de Barro", "Auto escola João de Barro"]);

    return(
        <View
            style={styles.container} 
        >       
            <VoltarBtn 
                navigation={navigation}
            /> 
            
            <Text style={styles.title}>Parceiros</Text>
            <View style={styles.underlineDecor} /> 

            <InputParceiroFrequencia 
                label={'Parceiro'}
                placeholder={'Digite o nome do parceiro'}
            />

            <ListaParceirosFrequencia 
                label={'Parceiros Atuais'}
                parceiros = {parceiros}
            />

            <AtualizarParceirosBtn 
                navigation={navigation}

            />

        </View>
    );
}



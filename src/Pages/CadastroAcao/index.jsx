import React, {useState} from "react";
import { View, Text} from "react-native";

import styles from "./styles";

import Projeto from '../../Components/FormCadastroAcao/Projeto';
import Local from "../../Components/FormCadastroAcao/Local";
import CadastrarBtn from "../../Components/FormCadastroAcao/CadastrarBtn";


export default function CadastroAcao({navigation}){
    
    const [projeto, setProjeto] = useState('');
    const [local, setLocal] = useState('');
    const [municipio, setMunicipio] = useState('');


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Cadastro de Ação</Text>

            <Projeto 
                projeto ={projeto}
                setProjeto = {setProjeto}
            />

            <Local 
                local ={local}
                setLocal = {setLocal}
            />

            <CadastrarBtn 
                projeto={projeto}
                local ={local}
            />
        </View>
    );
}



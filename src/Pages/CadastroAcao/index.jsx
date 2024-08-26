import React, {useState} from "react";
import { View, Text, ScrollView, TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from "./styles";

import Projeto from '../../Components/FormCadastroAcao/Projeto';
import Local from "../../Components/FormCadastroAcao/Local";
import Municipio from "../../Components/FormCadastroAcao/Municipio";

import CadastrarBtn from "../../Components/FormCadastroAcao/CadastrarBtn";



export default function CadastroAcao({navigation}){
    
    const [openProjeto, setOpenProjeto] = useState(false);
    const [openMunicipio, setOpenMunicipio] = useState(false);
    
    const [projeto, setProjeto] = useState('Escolha um projeto');
    const [local, setLocal] = useState('');
    const [municipio, setMunicipio] = useState('');

    //test
    console.log(projeto);


    return(
        <View
            style={styles.container} 
        >
        {openProjeto ? 
            <Projeto 
                setOpenProjeto = {setOpenProjeto}
                setProjeto = {setProjeto}
            /> 
            :
            <KeyboardAwareScrollView 
            
        >
            <Text style={styles.title}>Cadastro de Ação</Text>

            {/**projeto btn */}
            <Text style={styles.label}>Selecione o projeto: </Text>
            <TouchableOpacity 
                style={styles.btn}
                onPress={()=>setOpenProjeto(true)}
            >
                <Text style={styles.textBtn}>{projeto}</Text>
            </TouchableOpacity>

            <Local 
                local ={local}
                setLocal = {setLocal}
            />


            <CadastrarBtn 
                projeto={projeto}
                local ={local}
            />


            </KeyboardAwareScrollView>
        }
        
        </View>
    );
}



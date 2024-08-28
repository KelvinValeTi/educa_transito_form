import React, {useState} from "react";
import { View, Text, ScrollView, TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from "./styles";

import VoltarBtn from "../../Components/VoltarBtn";

import Projeto from '../../Components/FormCadastroAcao/Projeto';
import Local from "../../Components/FormCadastroAcao/Local";
import Municipio from "../../Components/FormCadastroAcao/Municipio";
import DataAcao from "../../Components/FormCadastroAcao/DataAcao";
import Horario from "../../Components/FormCadastroAcao/Horario";
import PublicoAtingido from "../../Components/FormCadastroAcao/PublicoAtingido";
import QtdMaterial from "../../Components/FormCadastroAcao/QtdMaterial";
import PublicoAlvo from "../../Components/FormCadastroAcao/PublicoAlvo";

import CadastrarBtn from "../../Components/FormCadastroAcao/CadastrarBtn";

//function CadastroAcao
export default function CadastroAcao({navigation}){
    
    const [openProjeto, setOpenProjeto] = useState(false);
    
    const [projeto, setProjeto] = useState('Escolha um projeto');
    const [local, setLocal] = useState('');
    const [municipio, setMunicipio] = useState('');
    const [dataAcao, setDataAcao] = useState('');
    const [horario, setHorario] = useState('');
    const [publicoAtingido, setPublicoAtingido] = useState('');
    const [qtdMaterial, setQtdMaterial] = useState('');
    const [publicoAlvo, setPublicoAlvo] = useState('');

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
            <KeyboardAwareScrollView>
                <VoltarBtn 
                    navigation={navigation}
                /> 
            
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

                <Municipio 
                    municipio ={municipio}
                    setMunicipio = {setMunicipio}
                />

                <View style={styles.twoColumsView}>
                    <DataAcao
                        dataAcao={dataAcao}
                        setDataAcao={setDataAcao}
                    />
                    <Horario 
                        horario={horario}
                        setHorario={setHorario}
                    />

                </View>
                
                <View style={styles.twoColumsView}>
                    <PublicoAtingido
                        publicoAtingido={publicoAtingido}
                        setPublicoAtingido={setPublicoAtingido}
                    />
                    <QtdMaterial
                        qtdMaterial={qtdMaterial}
                        setQtdMaterial={setQtdMaterial}
                    />

                </View>

                <PublicoAlvo 
                    publicoAlvo={publicoAlvo}
                    setPublicoAlvo={setPublicoAlvo}
                />

                <CadastrarBtn 
                    projeto={projeto}
                    local ={local}
                    municipio={municipio}
                    dataAcao={dataAcao}
                    horario={horario}
                    publicoAtingido={publicoAtingido}
                    qtdMaterial={qtdMaterial}
                    publicoAlvo={publicoAlvo}
                    navigation={navigation}
                />
            </KeyboardAwareScrollView>
        }
        
        </View>
    );
}



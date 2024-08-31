import React, {useState, useContext} from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AuthContext } from "../../Contexts/DataProvider";

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

import AtualizarAcaoBtn from "../../Components/AtualizarAcaoBtn";


//function UpdateAcao
export default function UpdateAcao({navigation}){

    const {acaoAtual} = useContext(AuthContext);
    
    const [openProjeto, setOpenProjeto] = useState(false);
    
    const [projeto, setProjeto] = useState(acaoAtual.projeto);
    const [local, setLocal] = useState(acaoAtual.local);
    const [municipio, setMunicipio] = useState(acaoAtual.municipio);
    const [dataAcao, setDataAcao] = useState(acaoAtual.data_acao);
    const [horario, setHorario] = useState(acaoAtual.horario);
    const [publicoAtingido, setPublicoAtingido] = useState(String(acaoAtual.publico_atingido)); 
    const [qtdMaterial, setQtdMaterial] = useState(String(acaoAtual.qtd_material));
    const [publicoAlvo, setPublicoAlvo] = useState(acaoAtual.publico_alvo);

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
            
                <Text style={styles.title}>Editar Ação</Text>

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

                <AtualizarAcaoBtn 
                    projeto={projeto}
                    local ={local}
                    municipio={municipio}
                    dataAcao={dataAcao}
                    horario={horario}
                    publicoAtingido={publicoAtingido}
                    qtdMaterial={qtdMaterial}
                    publicoAlvo={publicoAlvo}
                    navigation={navigation}
                    id={acaoAtual._id}
                />
            </KeyboardAwareScrollView>
        }
        
        </View>
    );
}



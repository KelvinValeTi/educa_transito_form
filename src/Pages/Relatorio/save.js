import React, {useContext, useState} from "react";
import { View, Text, ScrollView, TouchableOpacity, Share, Alert} from "react-native";
import { AuthContext } from "../../Contexts/DataProvider";

import styles from "./styles";

export default function Relatorio({navigation}){
    
    const {isConnectedUsers} = useContext(AuthContext);

    //test
    const coordenador='Alexandre Pereira';
    const projeto = 'Somos todos Pedestres';
    const local = 'Praça Deodoro';
    const municipio = 'São Luís';
    const data_acao = '08/08/2024';
    const horario = '09:00';
    const publico_atingido = "200";
    const qtd_material = '200';
    const publico_alvo="Pedestres e público em geral";
    const parceiros = ['PRE', 'PRF', 'Vida no Trânsito', 'Associação do sol nascente'];
    const equipe =['Marcia Renata', 'Julio Fernandes','Kelvin Vale', 'Alexandre Pereira','Ariana Barros','Nathalia Mendes', 'Rubens Calmon', 'Maria de Fátima'];
    const obs =['Abordagem educativa com entrega de material educativo.','A ação foi realizada em dois locais, sendo o segundo no Jaracaty.', 'Transporte foi realizado pela Empresa Transporte Vitória'];
    
    //coloca todas as informações em uma unica variavel mais amigavel ao usuário com virgulas
    function formataArray(param){
        let arrayFormat='';

        for(let i=0; i < param.length; i++){
            if(param[i]=== param[param.length-1]){
                arrayFormat = arrayFormat + param[i];
            }else{
                arrayFormat = arrayFormat + param[i]+'\n';
            }
        }
        return arrayFormat;
    }

    function formataObs(param){
        let obsFormatada='';

        for(let i=0; i < param.length; i++){
            obsFormatada = obsFormatada + "\n*Observação "+(i+1)+": \n" +param[i]+'\n';
        }
        return obsFormatada;
    }

    function WhatsAppRelatorio(){
        const relatorioWhats = '*Projeto*: '+ projeto + 
                                "\n\n*Coordenador*: " + coordenador +
                                "\n*Local*: "+ local +
                                "\n*Município*: "+ municipio +
                                "\n*Data*: " + data_acao +
                                "\n*Horário*: " + horario +
                                "\n*Quantidade de material*: " + qtd_material +
                                "\n*Público Atingido*: " + publico_atingido +
                                "\n*Público Alvo*: " + publico_alvo +
                                "\n\n*Equipe/ Frequência*:\n" + formataArray(equipe) +
                                "\n\n*Parceiros*:\n" + formataArray(parceiros) +
                                "\n\n" + formataObs(obs)        

        return relatorioWhats;
    }

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              WhatsAppRelatorio(),
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          Alert.alert(error.message);
        }
      };

    return(
        <View style={styles.container}>
            {/**preview do relatorio com as info */}
            <ScrollView style={styles.relatorio}>

                <Text style={styles.titleProjeto}></Text>
                
                <Text style={styles.descricao}>{WhatsAppRelatorio()}</Text>
            </ScrollView>
            
            {/**mais um botão de voltar */}
            <TouchableOpacity 
                style={styles.btn}
                onPress={onShare}
            >
                <Text style={styles.textBtn}>compartilhar no whatsApp</Text>
            </TouchableOpacity>
        </View>
        
    );
}

import React, {useContext, useState} from "react";
import { Text, TouchableOpacity, Share, Alert, Image} from "react-native";

import styles from "./styles";

export default function CompartilharWhatsAppBtn({acaoAtual}){
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

    if(arrayFormat===''){
      arrayFormat = 'Não há'
      return arrayFormat;
    }else{
      return arrayFormat;
    }

  }

  function formataObs(param){
    let obsFormatada='';

    for(let i=0; i < param.length; i++){
        obsFormatada = obsFormatada + "\n*Observação "+(i+1)+":* \n" +param[i]+'\n';
    }
    return obsFormatada;
  }

  //formatando os dados em uma única mensagem para ser enviada por whatsApp
  function WhatsAppRelatorio(){
    const relatorioWhats = '*Projeto*: '+ acaoAtual.projeto + 
                            "\n\n*Coordenador*: " + acaoAtual.coordenador +
                            "\n*Local*: "+ acaoAtual.local +
                            "\n*Município*: "+ acaoAtual.municipio +
                            "\n*Data*: " + acaoAtual.data_acao +
                            "\n*Horário*: " + acaoAtual.horario +
                            "\n*Quantidade de material*: " + acaoAtual.qtd_material +
                            "\n*Público Atingido*: " + acaoAtual.publico_atingido +
                            "\n*Público Alvo*: " + acaoAtual.publico_alvo +
                            "\n\n*Equipe/ Frequência*:\n" + formataArray(acaoAtual.equipe) +
                            "\n\n*Parceiros*:\n" + formataArray(acaoAtual.parceiros) +
                            "\n\n" + formataObs(acaoAtual.obs)        

    return relatorioWhats;
  }

  //função que vai compartilhar
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

    //----------- return
    return(
            <TouchableOpacity 
                style={styles.btn}
                onPress={onShare}
            >
                <Image 
                  style={styles.icon}
                  source={require('../../../assets/compartilhar_icon.png')}
                />
                <Text style={styles.textBtn}>Compartilhar</Text>
            </TouchableOpacity>
    );
}

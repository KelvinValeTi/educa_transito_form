import React from "react";
import { Text, ScrollView} from "react-native";

import styles from "./styles";

export default function RevisaoRelatorio({acaoAtual}){
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
        obsFormatada = obsFormatada + "\n-> Observação "+(i+1)+": \n" +param[i]+'\n';
    }
    return obsFormatada;
  }

  //----------- return
  return(
    <ScrollView style={styles.container}>
      <Text style={styles.textBold}>Projeto:
        <Text style={styles.text}> {acaoAtual.projeto}</Text>
      </Text>

      <Text style={styles.textBold}>Coordenador:
        <Text style={styles.text}> {acaoAtual.coordenador}</Text>
      </Text>

      <Text style={styles.textBold}>Local:
        <Text style={styles.text}> {acaoAtual.local}</Text>
      </Text>

      <Text style={styles.textBold}>Município:
        <Text style={styles.text}> {acaoAtual.municipio}</Text>
      </Text>

      <Text style={styles.textBold}>Data:
        <Text style={styles.text}> {acaoAtual.data_acao}</Text>
      </Text>

      <Text style={styles.textBold}>Horário:
        <Text style={styles.text}> {acaoAtual.horario}</Text>
      </Text>

      <Text style={styles.textBold}>Quantidade de Material:
        <Text style={styles.text}> {acaoAtual.qtd_material}</Text>
      </Text>

      <Text style={styles.textBold}>Público Atingido:
        <Text style={styles.text}> {acaoAtual.publico_atingido}</Text>
      </Text>

      <Text style={styles.textBold}>Público Alvo:
        <Text style={styles.text}> {acaoAtual.publico_alvo}</Text>
      </Text>

      <Text style={styles.textBold}>{'\n'}Equipe/ Frequência:
        <Text style={styles.text}> {'\n'}{formataArray(acaoAtual.equipe)}</Text>
      </Text>

      <Text style={styles.textBold}>{'\n'}Parceiros:
        <Text style={styles.text}> {'\n'}{formataArray(acaoAtual.parceiros)}</Text>
      </Text>

      <Text style={styles.textBold}>{'\n'}Observações:
        <Text style={styles.text}> {'\n'}{formataObs(acaoAtual.obs)}</Text>
      </Text>

    </ScrollView>
  );
}

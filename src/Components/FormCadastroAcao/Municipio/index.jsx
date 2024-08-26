import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import DropDownPicker from 'react-native-dropdown-picker';
import municipiosDb from "./municipios"; //banco de dados dos 217 municipios do ma


/**
 * ajeitar searchable
 * ajeitar teclado 
 *
 */

export default function Municipio({setMunicipio}){

    //dropdownPicker lib
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState(municipiosDb);


    return(
        <View style={styles.container}>
            <Text style={styles.label}>Município:</Text>

            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}

                onChangeValue={setMunicipio}

                placeholder="Selecione um projeto"
                placeholderStyle={{
                    color: "grey"
                }}

                searchable={true}

                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(10),
        width:RFValue(300),
        gap:RFValue(5)
    },
    label:{
        color:'#FFFFFF',
        fontSize:RFValue(16),
        fontFamily:"Inter_600SemiBold",
        textAlign:'left',
        paddingLeft:RFValue(15),
    },
    input:{
        backgroundColor:'#FFFFFF',
        width:'auto',
        height:RFValue(40),
        borderRadius:RFValue(8),
        paddingLeft: RFValue(15),
    }
});



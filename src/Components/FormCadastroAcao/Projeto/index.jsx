import React, {useState} from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import DropDownPicker from 'react-native-dropdown-picker';

export default function Projeto({projeto, setProjeto}){
    
    //dropdownPicker lib
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [items, setItems] = useState([
        {label: 'Detran Vai à escola', value: 'Detran Vai à Escola'},
        {label: 'Somos Todos Pedestres', value: 'Somos Todos Pedestres'},
        {label: 'Detran Volante', value: 'Detran Volante'},
        {label: 'Detran Cultural', value: 'Detran Cultural'},

    ]);


    return(
        <View style={styles.container}>
            <Text style={styles.label}>Projeto:</Text>

            <DropDownPicker 
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}

                onChangeValue={setProjeto}

                placeholder="Selecione um projeto"
                placeholderStyle={{
                    color: "grey"
                }}

                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:RFValue(50),
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



/**
 * Irá deixar o banco de dados disponivel para toda a aplicação, sem precisar ficar carregando em todo componente
 */

import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

export default function DataProvider({children}){
    //armazenar banco de dados localmente.
    const [databaseUsers, setDatabaseUsers] = useState('');
    const [myUser, setMyUser] = useState(''); //armazena usuário atual

    return (
        <AuthContext.Provider value={{databaseUsers, setDatabaseUsers, myUser, setMyUser}}>
            {children}
        </AuthContext.Provider>
    );
}

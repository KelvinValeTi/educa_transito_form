/**
 * Irá deixar o banco de dados disponivel para toda a aplicação, sem precisar ficar carregando em todo componente
 */

import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

export default function DataProvider({children}){
    
    const [databaseUsers, setDatabaseUsers] = useState('');
    const [myUser, setMyUser] = useState(''); //armazena usuário atual
    
    const [databaseAcoes, setDatabaseAcoes] = useState(''); //Ações de todo mundo! - para o sistema de adm
    const [minhasAcoes, setMinhasAcoes] = useState(''); //ações de apenas um usuário.

    const [isConnectedUsers, setIsConnectedUsers] = useState(false);
    const [isConnectedAcoes, setIsConnectedAcoes] = useState(false);

    return (
        <AuthContext.Provider value={{
            databaseUsers, 
            setDatabaseUsers, 

            myUser, 
            setMyUser,
            
            isConnectedUsers,
            setIsConnectedUsers,
            
            databaseAcoes,
            setDatabaseAcoes,
            
            isConnectedAcoes,
            setIsConnectedAcoes
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

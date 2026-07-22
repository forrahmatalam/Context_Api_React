import { createContext } from "react";
import { useState } from "react";   

const MyStore = createContext();


const ContextProvider =({children})=>{

const [centralValue, setCentralValue] = useState("Main context se hoon")

    return <MyStore.Provider value ={centralValue}>
        {children}    
    </MyStore.Provider>
}

export {MyStore, ContextProvider}

import { useState,useEffect,useContext,createContext } from "react";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
    const [name,setName]= useState("Zaher");

    return (
        <StateContext.Provider value={{name}}>
            {children}
        </StateContext.Provider>
    );
};

export const useAuth = () => {
    const context =useContext(StateContext);
    return context;
};
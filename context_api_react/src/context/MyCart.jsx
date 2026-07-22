import {createContext} from "react";
import { useState } from "react";


let MyCart=createContext();


const MyCartContextProvider=({children})=>{

    const [toggle, setToggle] = useState(false);

const [cart, setCart] = useState([]);

 return <MyCart.Provider value={{toggle,setToggle,cart,setCart}}>{children}</MyCart.Provider>  //children yha customer hai
}

export { MyCart, MyCartContextProvider };

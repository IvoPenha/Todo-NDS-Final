import { createContext, ReactNode, useContext, useState } from 'react';

export function initState(){
   const[isOpen, setIsOpen] = useState(false)
   return {isOpen : isOpen ,
          setIsOpen : setIsOpen}
}

